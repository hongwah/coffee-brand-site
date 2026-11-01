import { brand, contact, footerNote } from '../content.js'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>{contact.title}</h2>
      <p>{contact.body}</p>
      <a className="button button-dark" href={`mailto:${brand.email}`}>{contact.cta}</a>
      <footer className="footer">
        <span>{brand.name} {brand.nameEn}</span>
        <span>{footerNote}</span>
      </footer>
    </section>
  )
}
