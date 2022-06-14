<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        
        $role = Role::create(['name' => 'super']);

        $permissions = [
            [
                'group_name' => 'category',
                'permission' => [
                    'category.create',
                    'category.edit',
                    'category.delete',
                ]
            ],
            [
                'group_name' => 'course',
                'permission' => [
                    'course.create',
                    'course.edit',
                    'course.delete',
                ]
            ]
        ];

        for ($i=0; $i < count($permissions); $i++) { 
            $groupName = $permissions[$i]['group_name'];
            for ($j=0; $j < count($permissions[$i]['permission']); $j++) { 
                $permission = Permission::create(['name' => $permissions[$i]['permission'][$j],'group_name'=> $groupName]);
                $role->givePermissionTo($permission);
                $permission->assignRole($role);
            }
        }
    }
}
