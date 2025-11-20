import { Box, Text, Title } from '@mantine/core'
import styles from './VacancyPage.module.css'

export type VacancyPage = {
	id: number,
}


const VacancyPage = (id: VacancyPage) => {
	return (
		<>
			<Box></Box>
			<Box>
				<Title>Компания</Title>
				<Text>...</Text>
				<Title>О проекте:</Title>
				<Text>...</Text>
			</Box>
		</>
	)
}

export default VacancyPage