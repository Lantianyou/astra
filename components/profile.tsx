type Props = {
  name: string,
  title: string,
  description: string
}

function Profile({ name, title, description }:Props) {
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
