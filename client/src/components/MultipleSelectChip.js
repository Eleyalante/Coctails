import  React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {Checkbox} from "@mui/material";


export default class MultipleSelectChip extends  React.Component{

    constructor(props) {
        super(props);
        this.onChange = props.onChange;
        this.value = props.value;
        this.items = props.items;
        this.title = props.title;
    }

    render() {
        return (
            <FormControl style={{marginTop:'10px'}} fullWidth>
                <InputLabel >{this.title}</InputLabel>
                <Select
                    multiple
                    value={this.props.selectedItems}
                    onChange={this.onChange}
                    input={<OutlinedInput  label={this.title} />}
                    renderValue={(selected) => {
                        return (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value.id} label={value.name} />
                                ))}
                            </Box>
                        );
                    }}
                    MenuProps={MenuProps}
                >
                    {this.items.map((item) => (
                        <MenuItem

                            key={item.id}
                            value={item}
                            // style={getStyles(name, personName, theme)}
                        >
                            <Checkbox checked={this.props.selectedItems.indexOf(item) > -1} />
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};