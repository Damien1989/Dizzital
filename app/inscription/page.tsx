import SignUpForm from '.././_components/SignUpForm';
import Navbar from '.././_components/Navbar';

export default function InscriptionPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Faites des beaux formulaires simples et amusants</h1>
        <SignUpForm />
      </main>
    </>
  );
}