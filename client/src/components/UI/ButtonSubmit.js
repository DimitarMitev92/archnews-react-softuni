export const ButtonSubmit = () => {

    <button type="submit" className={`btn btn-secondary btn-lg ${!(validName && validUsername && validEmail && validPassword && validRepeatPassword) ? 'disabled' : ''}`}>Register</button>;
};