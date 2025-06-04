import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/index';
import { login } from '../../api/auth';
import { toast } from 'sonner';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [_, setAuth] = useRecoilState(authState);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password });
            setAuth(response.data);
            toast.success('Connexion réussie !');
        } catch (error) {
            toast.error('Erreur de connexion. Vérifiez vos identifiants.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default LoginForm;