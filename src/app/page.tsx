import AddCompanyButton from './components/add-company-button';
// import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
        <AddCompanyButton />
        {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      </main>
    </div>
  );
}
