import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
        .test('is-valid-date', 'Дата має бути коректною', (value) => !isNaN(Date.parse(value)))
        .when('date', (date, schema) =>
            date ? schema.min(date, 'Дата повернення не може бути раніше дати вильоту') : schema
        ),
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="search-form">
            <div className="form-group">
                <label htmlFor="from">Звідки</label>
                <input
                    id="from"
                    type="text"
                    {...register('from')}
                    className={errors.from ? 'input-error' : ''}
                />
                {errors.from && <p className="error-message">{errors.from.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="to">Куди</label>
                <input
                    id="to"
                    type="text"
                    {...register('to')}
                    className={errors.to ? 'input-error' : ''}
                />
                {errors.to && <p className="error-message">{errors.to.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="date">Дата відправлення</label>
                <input
                    id="date"
                    type="date"
                    {...register('date')}
                    className={errors.date ? 'input-error' : ''}
                    min={today}
                />
                {errors.date && <p className="error-message">{errors.date.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="returnDate">Дата повернення</label>
                <input
                    id="returnDate"
                    type="date"
                    {...register('returnDate')}
                    className={errors.returnDate ? 'input-error' : ''}
                />
                {errors.returnDate && (
                    <p className="error-message">{errors.returnDate.message}</p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="class">Клас рейсу</label>
                <select id="class" {...register('class')} className={errors.class ? 'input-error' : ''} defaultValue="economy">
                    <option value="economy">Економ-клас</option>
                    <option value="business">Бізнес-клас</option>
                    <option value="first">Перший клас</option>
                </select>
                {errors.class && <p className="error-message">{errors.class.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="passengers">Кількість пасажирів</label>
                <input
                    id="passengers"
                    type="number"
                    {...register('passengers')}
                    className={errors.passengers ? 'input-error' : ''}
                    min="1"
                    max="10"
                    defaultValue="1"
                />
                {errors.passengers && <p className="error-message">{errors.passengers.message}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="baggage">Тип багажу</label>
                <select id="baggage" {...register('baggage')} className={errors.baggage ? 'input-error' : ''} defaultValue="hand">
                    <option value="hand">Ручна поклажа</option>
                    <option value="checked">Зареєстрований багаж</option>
                </select>
                {errors.baggage && <p className="error-message">{errors.baggage.message}</p>}
            </div>

            <button type="submit">Пошук</button>
        </form>
    );
};

export default SearchForm;
