import { Box, Text, Title } from '@mantine/core'
import styles from './VacancyPage.module.css'
import { useParams } from 'react-router'

export type VacancyPageParams = {
	id: number,
}

const VacancyPage = () => {
	const { id } = useParams({ vacancyId });
	// console.log(id);


	return (
		<Box className={styles.VacancyPage}>
			<Box className={styles.boxVacancy}></Box>
			<Box className={styles.boxInfo}>
				<Box className={styles.boxInfoCampany}>
					<Title className={styles.boxInfoCampanyTitle}>Компания</Title>
					<Text className={styles.boxInfoCampanyText}>vacancy ID : {id}</Text>
				</Box>
				<Box className={styles.boxInfoProject}>
					<Title className={styles.boxInfoProjectTitle}>О проекте:</Title>
					<Text className={styles.boxInfoProjectText}>...</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default VacancyPage