import { Box, Divider } from "@mantine/core"
import Search from "../Search/Search"
import Skills from "../Skils/Skills"
import CitySelect from "../CitySelect/CitySelect"
import VacancyList from "../VacancyList/VacancyList"


const HomePage = () => {
	return (
		<>
			<Search />
			<Divider c={'#0F0F1033'} />
			<Box className='main'>
				<Box className='main__left-section'>
					<Skills />
					<CitySelect />
				</Box>
				<Box className='main__right-section'>
					<VacancyList />
				</Box>
			</Box>
		</>

	)
}

export default HomePage