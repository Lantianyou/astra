function Profile({ name, title, description }) {
  return (
    <div>
      <h2>
        {name}, {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Profile;
