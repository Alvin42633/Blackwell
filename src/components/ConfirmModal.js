import { useEffect } from 'react';
import Modal from 'react-modal';

const ConfirmModal = ({
	isOpen,
	setOpenMessage,
	header = 'Notification',
	message,
}) => {
	useEffect(() => {
		Modal.setAppElement('body');
	}, []);
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setOpenMessage(false)}
			style={{
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
				},
			}}
		>
			<h3>{header}</h3>
			<p>{message}</p>
			<div className="d-flex justify-content-end ">
				<button
					className="btn btn-primary"
					onClick={() => setOpenMessage(false)}
				>
					Confirm
				</button>
			</div>
		</Modal>
	);
};

export default ConfirmModal;
