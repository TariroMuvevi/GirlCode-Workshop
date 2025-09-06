import type KTBytesPerson from "../types/Person"
export default  function Profile({KTByte}: {KTByte: KTBytesPerson}
) {
     return (
     <>
     <h1>{KTByte.name}</h1>
     <img
     className="avatar"
     src={KTByte.imageUrl}
     alt={'Photo of ' + KTByte.name}
     style={{
        width: KTByte.imageSize,
         height: KTByte.imageSize
         }}
     />
     </>
 );
}