import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Input from './components/Input'
import Button from './components/Button'

const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	align-items: center;
`

const Section = styled.section`
	background-color: #eee;
	border-top: solid 2px palevioletred;
	padding: 20px 25px;
	width: 500px;
	box-shadow: 0 2px 3px rgb(0, 0, 0, 0.3 ) 
`

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
