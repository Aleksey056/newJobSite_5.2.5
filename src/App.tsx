import './App.css'
// import { Box, Divider } from '@mantine/core'
import '@mantine/core/styles.css';
import Header from './components/Header/Header'
// import Search from './components/Search/Search'
// import CitySelect from './components/CitySelect/CitySelect';
// import Skills from './components/Skils/Skills';
// import VacancyList from './components/VacancyList/VacancyList';
import { Route, Routes } from 'react-router';
import VacancyPage from './components/VacancyPage/VacancyPage';
import HomePage from './components/HomePage/HomePage';
import { Box } from '@mantine/core';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/vacancies' element={<VacancyPage />} />
			</Routes>
		</>
	)
}
export default App
