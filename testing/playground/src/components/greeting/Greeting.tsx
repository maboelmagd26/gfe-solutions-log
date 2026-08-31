type Props = { name?: string };

const Greeting = ({ name }: Props) => {
  return <h2>Hello, {name}</h2>;
};
export default Greeting;
