
import { useState } from 'react';

// Кастомний хук для керування кроками(варіант 15)
function useStepper(initialStep = 0, maxSteps = 3) {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const nextStep = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, maxSteps - 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const resetStep = () => {
        setCurrentStep(initialStep);
    };

    return {
        currentStep,
        nextStep,
        prevStep,
        resetStep,
        isLastStep: currentStep === maxSteps - 1,
        isFirstStep: currentStep === 0,
    };
}

export default useStepper;
