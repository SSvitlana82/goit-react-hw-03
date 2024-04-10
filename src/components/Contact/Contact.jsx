const Contact = ({ data, onDelete }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.number}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
