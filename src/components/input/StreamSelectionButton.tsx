import "./StreamSelectionButton.scss";

export interface StreamSelectionButtonProps {
    name: string,
    description: string,
    selected: boolean,
    uuid: string,
    onSelect: (uuid: string) => void
}

const StreamSelectionButton: React.FC<StreamSelectionButtonProps> = ({name, description, onSelect, selected, uuid}) => {
    return (
        <div className={`stream-selection-button${selected ? ' selected' : ''}`} onClick={()=>onSelect(uuid)} >
            <p className="stream-selection-title">{name}</p>
            <p className="stream-selection-description">{description}</p>
        </div>
    )
}

export default StreamSelectionButton;