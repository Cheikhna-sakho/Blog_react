const BilletCard = ({ billet }) => {
    return (
        <ul className='billet'>
            <div className='title'>{billet.title}</div>
            <div className='biillet-content'>{billet.content}</div>
            <div className='option'>
                <div className='edit'>
                    <a href=''>modifier</a> </div>
                <div className='delte'>
                    <a href=''>supprimer</a></div>
            </div>
        </ul>
    )
}
export default BilletCard;
