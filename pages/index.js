import Head from 'next/head';
import { LoginForm, RegisterForm } from '../components';
import { useMultistepForm } from '../hook/useMultistepForm';
import { Layout } from '../layout';

export default function Home() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<LoginForm />, <RegisterForm />]);
  return (
    <Layout title="Home">
      <main className="main">
        <div className="form__wrapper">
          <div className="form__selector-wrapper">
            <p className="form__selector-number">
              {currentStepIndex + 1} / {steps.length}
            </p>
            <h1
              className={
                isFirstStep
                  ? 'form__selector-active form__selector-title'
                  : 'form__selector-title'
              }
              onClick={back}
            >
              Login
            </h1>
            <h1
              className={
                isLastStep
                  ? 'form__selector-active form__selector-title'
                  : 'form__selector-title'
              }
              onClick={next}
            >
              Register
            </h1>
          </div>
          {step}
        </div>
      </main>
    </Layout>
  );
}
