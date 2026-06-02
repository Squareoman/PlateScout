import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h2>404 — Page not found</h2>
      <p><Link to="/">Go home</Link></p>
    </div>
  );
}
