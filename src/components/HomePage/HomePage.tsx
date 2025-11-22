import { Box, Divider } from "@mantine/core"
import Search from "../Search/Search"
import Skills from "../Skils/Skills"
import CitySelect from "../CitySelect/CitySelect"
import VacancyList from "../VacancyList/VacancyList"
import styles from './HomePage.module.css'
import { useSearchParams } from 'react-router'
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux"
import { useEffect } from "react"
import { setFilters } from "../../store/vacancySlice"

const HomePage = () => {

	const dispatch = useTypedDispatch();
	const filters = useTypedSelector(state => state.vacancy.filters);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const searchText = searchParams.get('text') || '';
		const searchCity = searchParams.get('area') || '';

		if (searchText !== filters.searchText || searchCity !== filters.searchCity) {
			dispatch(setFilters({ searchText, searchCity }));
		}
	}, [searchParams]);

	useEffect(() => {
		const params: Record<string, string> = {};

		if (filters.searchText) params.text = filters.searchText;
		if (filters.searchCity) params.area = filters.searchCity;

		setSearchParams(params);
	}, [filters.searchText, filters.searchCity]);



	return (
		<Box >
			<Search />
			<Divider c={'#0F0F1033'} />
			<Box className={styles.homePage}>
				<Box className={styles.mainLeftSection}>
					<Skills />
					<CitySelect />
				</Box>
				<VacancyList />
			</Box>
		</Box>
	)
}

export default HomePage