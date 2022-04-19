import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'

function App() {
	const handleSubmit = () => {}

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
						<Input name="constribuition" label="Contribuición anual" />
						<Input name="years" label="Años" />
						<Input name="rate" label="Interés estimado" />
						<Button>Calcular</Button>
					</Form>
				</Formik>
			</Section>
		</Container>
	)
}

export default App
