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

		// 
		console.log('searchText', searchText);
		console.log('searchCity', searchCity);
		// 

		if (searchText !== filters.searchText || searchCity !== filters.searchCity) {
			dispatch(setFilters({ searchText, searchCity }));
		}
	}, [searchParams]);

	// const searchCity = useTypedSelector(state => state.vacancy.filters.searchCity);
	// не могу понять свой же косяк, при изменение на странице все ок по фильтрам, но если меняю через URL именно город, то как будто фильтр сбрасывается, но при этом значение такое каким и должно быть =((((
	// Причем я вижу что сначала фильтра применяются, а потом ререндеринг как будто их нет

	// console.log('searchCity', searchCity);
	// на замедление ЦП видно что происходит поиск без фильтров потом с фильтрами и потом снова бзе фильтров

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