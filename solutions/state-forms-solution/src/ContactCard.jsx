function ContactCard(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
	<h5 className="card-title">{props.person.name}</h5>
	<h6 className="card-subtitle mb-2 text-muted">{props.person.email}</h6>
	<p className="card-text">
	  <strong>Age:</strong> {props.person.age}
	  <br />
	  <strong>Gender:</strong> {props.person.gender}
	  <br />
	  <strong>Subscribed:</strong> {props.person.isSubscribed ? 'Yes' : 'No'}
	</p>
      </div>
    </div>
  );
}

export default ContactCard;
