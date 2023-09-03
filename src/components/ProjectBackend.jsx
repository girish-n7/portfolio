/* eslint-disable react/prop-types */

export default function ProjectBackend({ name, description }) {
  return (
    <div className="project--backend__card">
      <p className="project--backend__title">{name}</p>
      <p className="project--backend__desc">{description}</p>
    </div>
  );
}
