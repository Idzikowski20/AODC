
import EditPost from '../Components/AdminPanel/Editpost';

const EditPostPage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          <main className="p-6">
            <EditPost/>
          </main>
        </div>
      </div>
    </>
  );
}
export default EditPostPage