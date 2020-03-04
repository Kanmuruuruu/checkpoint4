import capitalize from "./capitalize";

export default function fullName(firstname, lastname) {
  return `${lastname.toUpperCase()} ${capitalize(firstname)}`;
}
