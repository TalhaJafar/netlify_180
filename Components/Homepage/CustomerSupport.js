import '../../styles/styles.css'
const CustomerSupport = () => {
    return (
        <div style={{ backgroundImage: BImage }} className="customer-support-main">
            <h1 style={{ color: 'white', marginTop: '2%' ,marginBottom:'2%' }}>Customer Service</h1>
            <div style={{ width: '80%', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', color: 'white' }}>
                <div className="vertical-box-align">    
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/mail.svg" alt="Logo" />
                    <h3>HOURS OF OPERATION</h3>
                    <h6 ><a href="#">Monday to Friday 10am - 6pm</a> </h6>
                </div>

                <div className="vertical-line"/>

                <div className="vertical-box-align">
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/mail.svg" alt="Logo" />
                    <h3>GIVE US A CALL</h3>
                    <h6><a href="#">(855) 994-6180</a></h6>
                </div>

                <div className="vertical-line"/>

                <div className="vertical-box-align">
                    <img className="icons-width" src="https://www.180smoke.ca/static/images/icons/mail.svg" alt="Logo" />
                    <h3>SEND US AN EMAIL</h3>
                    <h6><a href="#">support@180smoke.com</a></h6>
                </div>
            </div>
        </div>
    );
}
export default CustomerSupport;


const BImage = 'url(data:image/png;base64,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)'