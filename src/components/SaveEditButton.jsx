export default function SaveEditButton({ pageState, onClick }) {
  return (
    <>
      <button onClick={onClick}>{pageState ? 'Edit' : 'Submit'}</button>
    </>
  );
}
