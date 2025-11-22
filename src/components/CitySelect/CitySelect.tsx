import { Image, Select } from '@mantine/core';
import { setFilters } from '../../store/vacancySlice';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import styles from './CitySelect.module.css';
import iconCitySelect from '../../assets/Vector.svg'
import { useSearchParams } from 'react-router';

const cityData = [
	{ value: '', label: 'Все города' },
	{ value: '1', label: 'Москва' },
	{ value: '2', label: 'Санкт-Петербург' },
	{ value: '70', label: 'Оренбург' }
];

const CitySelect = () => {
	const dispatch = useTypedDispatch()
	const [searchParams,] = useSearchParams();
	const searchCity = searchParams.get('area') || '';

	// const searchCity = useTypedSelector(state => state.vacancy.filters.searchCity);
	// не могу понять свой же косяк, при изменение на странице все ок по фильтрам, но если меняю через URL именно город, то как будто фильтр сбрасывается, но при этом значение такое каким и должно быть =((((
	// Причем я вижу что сначала фильтра применяются, а потом ререндеринг как будто их нет

	// console.log('searchCity', searchCity);

	const setSearchCity = (city: string | null) => {
		dispatch(setFilters({ searchCity: city }))
	}

	return (
		<Select
			leftSection={
				<Image
					src={iconCitySelect}
					className={styles.iconCitySelect}
				/>}
			placeholder="Выберете вариант"
			data={cityData}
			value={searchCity}
			onChange={setSearchCity}
			className={styles.moduleCitySelector}
			data-testid='citySelectInput'
		/>
	);
};

export default CitySelect;

