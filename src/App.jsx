import { Formik, Form } from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'
import { useState } from 'react'

const compoundInterest = (deposit, contribuition, years, rate) => {
	let total = deposit
	for (let i = 0; i < years; i++) {
		total = (total + contribuition) * (rate + 1)
	}

	return Math.round(total)
}

function App() {
	const [balance, setBalance] = useState('')

	const handleSubmit = ({deposit, contribuition, years, rate}) => {
		const val = compoundInterest(Number(deposit), Number(contribuition), Number(years), Number(rate))
		setBalance(val)
	}

	return (
		<Container>
			<Section>
				<Formik
					initialValues={{
						deposit: "",
						contribuition: "",
						years: "",
						rate: ""
					}}
					onSubmit={handleSubmit}
				>
					<Form>
						<Input name="deposit" label="Depósito inicial" />
						<Input name="contribuition" label="Contribuición anual" />
						<Input name="years" label="Años" />
						<Input name="rate" label="Interés estimado" />
						<Button>Calcular</Button>
					</Form>
				</Formik>
				{balance && `Balance final: ${balance}`}
			</Section>
		</Container>
	)
}

export default App
