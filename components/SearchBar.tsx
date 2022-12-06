import SearchIcon from '@mui/icons-material/Search'

import { StyledSearchBar, StyledSearchIconWrapper, StyledInputBase} from '../styledComponents'


const SearchBar = () => {

	return (
		<StyledSearchBar>
			<StyledSearchIconWrapper>
				<SearchIcon />
			</StyledSearchIconWrapper>
			<StyledInputBase
				placeholder="Search…"
				inputProps={{ 'aria-label': 'search' }}
			/>
	</StyledSearchBar>
	)
}

export default SearchBar