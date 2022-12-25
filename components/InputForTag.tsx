import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';

import { Box, OutlinedInput, MenuItem, FormControl, Chip } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
	tags: string[],
  selectedTags: string[],
	handleTagsChange: (event: SelectChangeEvent<string[]>) => void
}

export default function InputForTag({ tags, selectedTags, handleTagsChange }: Props) {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <Select
          id="demo-multiple-chip"
          multiple
          value={selectedTags}
          onChange={handleTagsChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} sx={{borderRadius: 1}}/>
              ))}
            </Box>
          )}
          MenuProps={{PaperProps: {style: { maxHeight: (48 * 4.5 + 8), width: 250}}}}
        >
          {tags.map((tag) => (
            <MenuItem
              key={tag}
              value={tag}
              style={getStyles(tag, tags, theme)}
            >
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
