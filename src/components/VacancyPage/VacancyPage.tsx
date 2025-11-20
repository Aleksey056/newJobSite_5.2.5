import { Box, Text, Title } from '@mantine/core'
import styles from './VacancyPage.module.css'
import { useParams } from 'react-router'

export type VacancyPageParams = {
	id: number,
}


const VacancyPage = () => {

	const { id } = useParams();

	return (
		<>
			<Box className={styles.boxVacancy}></Box>
			<Box className={styles.boxInfo}>
				<Title>Компания</Title>
				<Text>...</Text>
				<Title>О проекте:</Title>
				<Text>...</Text>
			</Box>
		</>
	)
}

export default VacancyPage