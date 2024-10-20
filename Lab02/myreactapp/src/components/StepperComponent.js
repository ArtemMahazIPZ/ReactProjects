import React from 'react';
import useStepper from '../hooks/useStepper';

const StepperComponent = () => {
    const { currentStep, nextStep, prevStep, resetStep, isLastStep, isFirstStep } = useStepper(0, 4);

    return (
        <div>
            <h2>Крок: {currentStep + 1}</h2>

            <div>
                <button onClick={prevStep} disabled={isFirstStep}>
                    Назад
                </button>
                <button onClick={nextStep} disabled={isLastStep}>
                    Вперед
                </button>
                <button onClick={resetStep}>
                    Скинути
                </button>
            </div>

            {isLastStep && <p>Ви на останньому кроці!</p>}
        </div>
    );
};

export default StepperComponent;
