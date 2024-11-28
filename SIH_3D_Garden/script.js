 // Create Scene
 const scene = new THREE.Scene();

 // Background Sky color (light blue)
 scene.background = new THREE.Color(0x87CEEB);  // Sky blue color

 // Camera setup
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.set(0, 2, 5);  // Slightly elevated and farther away

 // WebGLRenderer setup
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // OrbitControls initialization
 const controls = new THREE.OrbitControls(camera, renderer.domElement);
 controls.enableDamping = true;  // Smooth motion
 controls.dampingFactor = 0.05;  // Damping speed
 controls.minDistance = 2;  // Minimum zoom
 controls.maxDistance = 10;  // Maximum zoom

 // Light setup
 const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);  // Soft light
 scene.add(light);

 // Ground (Grass) setup
 const grassGeometry = new THREE.PlaneGeometry(500, 500);  // Large ground
 const grassMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });  // Green grass color
 const grass = new THREE.Mesh(grassGeometry, grassMaterial);
 grass.rotation.x = - Math.PI / 2;  // Make it horizontal
 grass.position.y = -1;  // Lower the ground plane
 scene.add(grass);

 // Load GLB model
 const loader = new THREE.GLTFLoader();
 loader.load('./model/model.glb', function (gltf) {
   scene.add(gltf.scene);  // Add the model to the scene

   // Animation loop
   function animate() {
     requestAnimationFrame(animate);
     controls.update();  // Update controls
     renderer.render(scene, camera);  // Render the scene
   }

   animate();  // Start animation loop
 }, undefined, function (error) {
   console.error(error);  // Error handling
 });

 // Add Grass-like Structures (Simple Blades)
 const grassBladeGeometry = new THREE.PlaneGeometry(0.1, 0.5);  // Blade of grass
 const grassBladeMaterial = new THREE.MeshBasicMaterial({ color: 0x32CD32, side: THREE.DoubleSide });  // Light green grass

 for (let i = 0; i < 1000; i++) {  // 1000 grass blades
   const grassBlade = new THREE.Mesh(grassBladeGeometry, grassBladeMaterial);
   
   // Random position and slight rotation for each blade
   grassBlade.position.x = (Math.random() - 0.5) * 20;  // Spread blades across the ground
   grassBlade.position.z = (Math.random() - 0.5) * 20;
   grassBlade.position.y = -0.5;  // Slightly raised above ground

   grassBlade.rotation.y = Math.random() * Math.PI;  // Randomly rotate each blade

   scene.add(grassBlade);
 }

 // Handle window resize
 window.addEventListener('resize', function () {
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(window.innerWidth, window.innerHeight);
 });