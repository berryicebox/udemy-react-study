import { redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw JSON.stringify({ message: 'Unsupporeted mode.' }, { status: 400 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    body: JSON.stringify(authData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status === 422 || response.status === 401) {
    const errorJson = await response.json();
    console.error('Signup Error:', errorJson);
    return response;
  }

  if (!response.ok) {
    throw new Response({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  return redirect('/');
}