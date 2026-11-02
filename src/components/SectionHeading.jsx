function SectionHeading({ id, children }) {
  return (
    <h2 className="section-heading" id={id}>
      {children}
    </h2>
  )
}

export default SectionHeading
