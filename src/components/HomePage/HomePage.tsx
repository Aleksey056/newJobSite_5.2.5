import { Box, Divider } from "@mantine/core"
import Search from "../Search/Search"
import Skills from "../Skils/Skills"
import CitySelect from "../CitySelect/CitySelect"
import VacancyList from "../VacancyList/VacancyList"
import styles from './HomePage.module.css'

const HomePage = () => {
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