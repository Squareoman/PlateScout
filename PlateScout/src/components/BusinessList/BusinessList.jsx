import Business from '../Business/Business';
import './BusinessList.css';

export default function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}
