function CardSection({title, subtitle, children})
{
    return (
        <section className="card-section">
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                {subtitle && <p className="section-subtitle">{subtitle}</p>}
            </div>
            <br/>
            <div className="cards-container">
                {children}
            </div>
        </section>
    )
}

export default CardSection