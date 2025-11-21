import { Box, Text, Title } from '@mantine/core'
import styles from './VacancyPage.module.css'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux'
import { fetchVacanciById } from '../../store/vacancySlice'

const VacancyPage = () => {
	const { id } = useParams();
	const dispatch = useTypedDispatch()
	const vacancyId = useTypedSelector(state => state.vacancy.items)

	console.log(vacancyId);


	useEffect(() => {
		dispatch(fetchVacanciById(id))
	}, [dispatch, id])

	return (
		<Box className={styles.VacancyPage}>
			<Box className={styles.boxVacancy}></Box>
			<Box className={styles.boxInfo}>
				<Box className={styles.boxInfoCampany}>
					<Title className={styles.boxInfoCampanyTitle}>Компания</Title>
					<Text className={styles.boxInfoCampanyText}>vacancy ID : </Text>
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