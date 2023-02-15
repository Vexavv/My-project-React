import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './ToggleButtons.scss'
import PropTypes from 'prop-types';

export default function ToggleButtons({changeModule, changeModuleList}) {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup className='Toggle'
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="list" aria-label="list" onClick={changeModuleList}>
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module" onClick={changeModule}>
                <ViewListIcon  />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
ToggleButton.propTypes = {
    changeModule: PropTypes.func,
    changeModuleList: PropTypes.func,
};

ToggleButton.defaultProps = {
    className: '',
    type: 'button',
};