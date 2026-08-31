export default function getName(name = "unknown") {
  name = name.trim();
  if (name.length >= 10) return name.slice(0, 10);
  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  return name;
}
