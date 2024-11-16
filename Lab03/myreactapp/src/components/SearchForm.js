import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FieldGroup from './FieldGroup';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import DateInput from './DateInput';

const today = new Date().toISOString().split('T')[0];

const schema = yup.object().shape({
    from: yup.string().required("Місто відправлення є обов'язковим"),
    to: yup.string().required("Місто призначення є обов'язковим"),
    date: yup
        .string()
        .required("Дата є обов'язковою")
        .test('is-valid-date', 'Дата має бути коректною', (value) => !isNaN(Date.parse(value)))
        .test('is-future-date', 'Дата вильоту не може бути в минулому', (value) => !value || new Date(value) >= new Date(today)),
    returnDate: yup
        .string()
        .nullable() // дозволяє залишати поле пустим
        .test('is-valid-date', 'Дата має бути коректною', (value) => !value || !isNaN(Date.parse(value)))
        .test('is-after-departure', 'Дата повернення не може бути раніше дати вильоту', (value, context) => {
            const departureDate = new Date(context.parent.date);
            const returnDate = new Date(value);
            return !value || returnDate >= departureDate;
        }),
    class: yup.string().required("Вибір класу рейсу є обов'язковим"),
    passengers: yup
        .number()
        .required("Вкажіть кількість пасажирів")
        .min(1, "Мінімальна кількість пасажирів - 1")
        .max(10, "Максимальна кількість пасажирів - 10"),
    baggage: yup.string().required("Вибір типу багажу є обов'язковим"),
});


const SearchForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const glassOptions = [
        { value: "economy", label: "Економ-клас" },
        { value: "business", label: "Бізнес-клас" },
        { value: "first", label: "Перший клас" },
    ];

    const baggageOptions = [
        { value: "hand", label: "Ручна поклажа" },
        { value: "checked", label: "Зареєстрований багаж" },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <FieldGroup id="from" label="Звідки" error={errors.from?.message}>
                <TextInput id="from" register={register('from')} placeholder="Enter city" error={errors.from} />
            </FieldGroup>

            <FieldGroup id="to" label="Куди" error={errors.to?.message}>
                <TextInput id="to" register={register('to')} placeholder="Enter city" error={errors.to} />
            </FieldGroup>

            <FieldGroup id="date" label="Дата відправлення" error={errors.date?.message}>
                <DateInput id="date" register={register('date')} error={errors.date} min={today} />
            </FieldGroup>

            <FieldGroup id="returnDate" label="Дата повернення" error={errors.returnDate?.message}>
                <DateInput id="returnDate" register={register('returnDate')} error={errors.returnDate} />
            </FieldGroup>

            <FieldGroup id="class" label="Клас рейсу" error={errors.class?.message}>
                <SelectInput id="class" register={register('class')} options={glassOptions} error={errors.class} />
            </FieldGroup>

            <FieldGroup id="passengers" label="Кількість пасажирів" error={errors.passengers?.message}>
                <TextInput
                    id="passengers"
                    register={register('passengers')}
                    type="number"
                    error={errors.passengers}
                    min="1"
                    max="10"
                    defaultValue="1"
                />
            </FieldGroup>


            <FieldGroup id="baggage" label="Тип багажу" error={errors.baggage?.message}>
                <SelectInput id="baggage" register={register('baggage')} options={baggageOptions} error={errors.baggage} />
            </FieldGroup>

            <button type="submit">Пошук</button>
        </form>
    );
};

export default SearchForm;
