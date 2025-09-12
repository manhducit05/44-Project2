import './white-card.css'
const WhiteCard = () => {
  return (
    <div className="card white-card">
      <div className="flex-card">
        <div>
          <p className="balance">Balance</p>
          <h2 className="money">$5,756</h2>
        </div>
        <img className="chip-card" src="/images/home/Chip_Card2.svg" alt="chip-card" />
      </div>
      <div className="flex-card">
        <p className="holder">CARD HOLDER<br /><span className="name">Eddy Cusuma</span></p>
        <p className="valid">VALID THRU<br /><span className="ratio">12/22</span></p>
      </div>
      <div className="flex-card">
        <p className="number">3778 **** **** 1234</p>
        <img className="bank" src="/images/home/bank2.svg" alt="bank" />

      </div>
    </div>
  )
}
export default WhiteCard;