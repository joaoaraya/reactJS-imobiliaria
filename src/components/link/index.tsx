import gotoIcon from '../../assets/icons/goto-icon.svg';

export function Link(props: any) {
    return (
        <>
            <span>{props.txt}<img src={gotoIcon} alt="icone" /></span>
        </>
    )
}