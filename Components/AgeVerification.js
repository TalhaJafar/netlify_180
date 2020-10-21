import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Router from 'next/router';
import { Container, Row, Col, Form } from 'react-bootstrap';




const AgeVerification = (props) => {
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [selectedState, setSelectedState] = useState('');

    // const states = store.ageVerificationLocations || [];
    const states = [{ label: 'Alberta', value: '66' },{ label: 'Ontario', value: '74' },{ label: 'Nova Scotia', value: '71' },{ label: 'Manitoba', value: '65' }];

    const getMonths = () => {
        return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
    };

    const getDates = () => {
        return new Date(
            year ? year : new Date().getFullYear(),
            month ? getMonths().indexOf(month) + 1 : new Date().getMonth() + 1,
            0
        ).getDate();
    };


    const HandleClick = async (route) => {
        const setCookies = await setCookie('age_verified', '1', 360000);

        Router.push(route)
    }

    const getSelectedStateAge = () => {
        if (selectedState && states) {
            let st = states.find(item => item.region_id == selectedState);
            // return st.age;
            return true;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        // const mDate = moment(`${year} ${month} ${date}`, 'YYYY MMMM DD');
        // const age = moment().diff(mDate, 'years');

        // if (age >= parseInt(getSelectedStateAge())) {
        //   let st = states.find(item => item.region_id == selectedState);
        //   updateAgeVerified(
        //     st.state,
        //     st.region_id,
        //     st.age,
        //     parseInt(st.lifetime) * 1000
        //   );
        //   return false;
        // }
        // swal(
        //   t('general__oops_message'),
        //   `You must be over ${getSelectedStateAge()} years old to visit this website.`,
        //   'error'
        // );
        return false;
    };



    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%', height: 150, backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img style={{ width: 250, height: 250 }} src='https://www.180smoke.ca/static/logo.svg' alt='logo' />
                </div>
                <Container fluid style={{ marginTop: 130 }}>
                    <Row className="age-verification__body">
                        <Col className="text-center">
                            <h1 className="age-verification__title">
                                Welcome to <strong>180 Smoke</strong>
                            </h1>
                            <p>Select your province to validate your age.</p>
                            <div style={{ width: '20%', margin: '0 auto 1rem' }}>
                                <Form.Group className="age-verification__form-state" >
                                    <Form.Control
                                        as="select"
                                        name="state"
                                        id="state"
                                        className="form-input"
                                        aria-label={'State'}
                                        required
                                        // value={selectedState}
                                        onChange={e => {
                                            setSelectedState(e.target.value);
                                            // if (e.target.value !== '') {     
                                            //     setClassColorName('age-verification');
                                            // } else {
                                            //     setClassColorName('age-verification1');
                                            // }
                                        }}
                                    >
                                        <option value="">Select your Province</option>
                                        {states.map((stt, key) => (
                                            <option value={stt.value} key={key}>
                                                {stt.label}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            {getSelectedStateAge() && (
                                <>
                                    <p>
                                        <strong>
                                            <u>
                                                We only sell to adults age {getSelectedStateAge()} years
                                                or older in your province.
                                            </u>
                                        </strong>
                                    </p>
                                    <p>
                                        Please select your birthdate to confirm you are at least{' '}
                                        {getSelectedStateAge()} years of age.
                                        </p>
                                </>
                            )}
                        </Col>
                    </Row>
                </Container>
                {getSelectedStateAge() && (
                    <Row style={{ backgroundColor: 'black', width: '30%', color: 'white' }} className="justify-content-center age-verification__form-birth">
                        <Col className="text-center">
                            <form
                                className="age-verification__form-birth__form"
                                onSubmit={handleSubmit}
                            >
                                {/* > */}
                                <p>
                                    <strong>DATE OF BIRTH</strong>
                                </p>
                                <Form.Row>
                                    <Form.Group
                                        as={Col}
                                        className="age-verification__form-birth__input"
                                    >
                                        <Form.Control
                                            as="select"
                                            name="month"
                                            id="month"
                                            required={true}
                                            value={month}
                                            onChange={e => setMonth(e.target.value)}
                                        >
                                            <option value="">Month</option>
                                            {getMonths().map((month, key) => (
                                                <option value={month} key={key}>
                                                    {month}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="age-verification__form-birth__input"
                                    >
                                        <Form.Control
                                            as="select"
                                            name="day"
                                            id="day"
                                            required
                                            value={date}
                                            onChange={e => setDate(e.target.value)}
                                        >
                                            <option value="">Day</option>
                                            {Array.from(
                                                { length: getDates() },
                                                (_, idx) => ++idx
                                            ).map((day, key) => (
                                                <option value={day} key={key}>
                                                    {day}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="age-verification__form-birth__input"
                                    >
                                        <Form.Control
                                            as="select"
                                            name="year"
                                            id="year"
                                            required
                                            value={year}
                                            onChange={e => setYear(e.target.value)}
                                        >
                                            <option value="">Year</option>
                                            {Array.from({ length: 100 }, (_, idx) => ++idx).map(
                                                (year, key) => (
                                                    <option
                                                        value={new Date().getFullYear() - year}
                                                        key={key}
                                                    >
                                                        {new Date().getFullYear() - year}
                                                    </option>
                                                )
                                            )}
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} className="mt-md-4">
                                        <p>Yes, I am {getSelectedStateAge()} years or older</p>
                                        <Button variant="success" style={{ color: 'white', backgroundColor: '#729300', width: '100%' }} onClick={() =>{ console.log(props.route); return HandleClick(props.route)}} >Verify</Button>
                                    </Form.Group>
                                </Form.Row>
                            </form>
                        </Col>
                    </Row>
                )}
            </div>

        </>
    )
}


const setCookie = (name, value, lifetime) => {
    var expires = '';
    if (lifetime) {
        var date = new Date();
        date.setTime(date.getTime() + lifetime);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default AgeVerification;