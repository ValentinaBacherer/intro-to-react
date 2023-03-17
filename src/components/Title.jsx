import { Text } from './Text';
function Title(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: `${props.color}` }}>{props.frase}</h1>
      <Text />
    </div>
  );
}
export default Title;
