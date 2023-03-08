export const Planet = (props) => {
    return props.isGasPlanet && <div>{props.name}</div>;
}