import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Proton extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Proton.Types.ClientConfiguration)
  config: Config & Proton.Types.ClientConfiguration;
  /**
   * In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account. For more information, see Environment account connections in the Proton Administrator guide.
   */
  acceptEnvironmentAccountConnection(params: Proton.Types.AcceptEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.AcceptEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.AcceptEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account. For more information, see Environment account connections in the Proton Administrator guide.
   */
  acceptEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.AcceptEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.AcceptEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Attempts to cancel an environment deployment on an UpdateEnvironment action, if the deployment is IN_PROGRESS. For more information, see Update an environment in the Proton Administrator guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateEnvironment action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelEnvironmentDeployment(params: Proton.Types.CancelEnvironmentDeploymentInput, callback?: (err: AWSError, data: Proton.Types.CancelEnvironmentDeploymentOutput) => void): Request<Proton.Types.CancelEnvironmentDeploymentOutput, AWSError>;
  /**
   * Attempts to cancel an environment deployment on an UpdateEnvironment action, if the deployment is IN_PROGRESS. For more information, see Update an environment in the Proton Administrator guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateEnvironment action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelEnvironmentDeployment(callback?: (err: AWSError, data: Proton.Types.CancelEnvironmentDeploymentOutput) => void): Request<Proton.Types.CancelEnvironmentDeploymentOutput, AWSError>;
  /**
   * Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is IN_PROGRESS. For more information, see Update a service instance in the Proton Administrator guide or the Proton User guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateServiceInstance action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelServiceInstanceDeployment(params: Proton.Types.CancelServiceInstanceDeploymentInput, callback?: (err: AWSError, data: Proton.Types.CancelServiceInstanceDeploymentOutput) => void): Request<Proton.Types.CancelServiceInstanceDeploymentOutput, AWSError>;
  /**
   * Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is IN_PROGRESS. For more information, see Update a service instance in the Proton Administrator guide or the Proton User guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateServiceInstance action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelServiceInstanceDeployment(callback?: (err: AWSError, data: Proton.Types.CancelServiceInstanceDeploymentOutput) => void): Request<Proton.Types.CancelServiceInstanceDeploymentOutput, AWSError>;
  /**
   * Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is IN_PROGRESS. For more information, see Update a service pipeline in the Proton Administrator guide or the Proton User guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateServicePipeline action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelServicePipelineDeployment(params: Proton.Types.CancelServicePipelineDeploymentInput, callback?: (err: AWSError, data: Proton.Types.CancelServicePipelineDeploymentOutput) => void): Request<Proton.Types.CancelServicePipelineDeploymentOutput, AWSError>;
  /**
   * Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is IN_PROGRESS. For more information, see Update a service pipeline in the Proton Administrator guide or the Proton User guide. The following list includes potential cancellation scenarios.   If the cancellation attempt succeeds, the resulting deployment state is CANCELLED.   If the cancellation attempt fails, the resulting deployment state is FAILED.   If the current UpdateServicePipeline action succeeds before the cancellation attempt starts, the resulting deployment state is SUCCEEDED and the cancellation attempt has no effect.  
   */
  cancelServicePipelineDeployment(callback?: (err: AWSError, data: Proton.Types.CancelServicePipelineDeploymentOutput) => void): Request<Proton.Types.CancelServicePipelineDeploymentOutput, AWSError>;
  /**
   * Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.  You can provision environments using the following methods:    Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.   Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.   For more information, see Environments and Provisioning methods in the Proton Administrator Guide.
   */
  createEnvironment(params: Proton.Types.CreateEnvironmentInput, callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentOutput) => void): Request<Proton.Types.CreateEnvironmentOutput, AWSError>;
  /**
   * Deploy a new environment. An Proton environment is created from an environment template that defines infrastructure and resources that can be shared across services.  You can provision environments using the following methods:    Amazon Web Services-managed provisioning: Proton makes direct calls to provision your resources.   Self-managed provisioning: Proton makes pull requests on your repository to provide compiled infrastructure as code (IaC) files that your IaC engine uses to provision resources.   For more information, see Environments and Provisioning methods in the Proton Administrator Guide.
   */
  createEnvironment(callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentOutput) => void): Request<Proton.Types.CreateEnvironmentOutput, AWSError>;
  /**
   * Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account. An environment account connection is a secure bi-directional connection between a management account and an environment account that maintains authorization and permissions. For more information, see Environment account connections in the Proton Administrator guide.
   */
  createEnvironmentAccountConnection(params: Proton.Types.CreateEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.CreateEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account. An environment account connection is a secure bi-directional connection between a management account and an environment account that maintains authorization and permissions. For more information, see Environment account connections in the Proton Administrator guide.
   */
  createEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.CreateEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Create an environment template for Proton. For more information, see Environment Templates in the Proton Administrator Guide. You can create an environment template in one of the two following ways:   Register and publish a standard environment template that instructs Proton to deploy and manage environment infrastructure.   Register and publish a customer managed environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton doesn't manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the provisioning parameter and set the value to CUSTOMER_MANAGED. For more information, see Register and publish an environment template in the Proton Administrator Guide.  
   */
  createEnvironmentTemplate(params: Proton.Types.CreateEnvironmentTemplateInput, callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentTemplateOutput) => void): Request<Proton.Types.CreateEnvironmentTemplateOutput, AWSError>;
  /**
   * Create an environment template for Proton. For more information, see Environment Templates in the Proton Administrator Guide. You can create an environment template in one of the two following ways:   Register and publish a standard environment template that instructs Proton to deploy and manage environment infrastructure.   Register and publish a customer managed environment template that connects Proton to your existing provisioned infrastructure that you manage. Proton doesn't manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the provisioning parameter and set the value to CUSTOMER_MANAGED. For more information, see Register and publish an environment template in the Proton Administrator Guide.  
   */
  createEnvironmentTemplate(callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentTemplateOutput) => void): Request<Proton.Types.CreateEnvironmentTemplateOutput, AWSError>;
  /**
   * Create a new major or minor version of an environment template. A major version of an environment template is a version that isn't backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
   */
  createEnvironmentTemplateVersion(params: Proton.Types.CreateEnvironmentTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.CreateEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Create a new major or minor version of an environment template. A major version of an environment template is a version that isn't backwards compatible. A minor version of an environment template is a version that's backwards compatible within its major version.
   */
  createEnvironmentTemplateVersion(callback?: (err: AWSError, data: Proton.Types.CreateEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.CreateEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Create and register a link to a repository that can be used with self-managed provisioning (infrastructure or pipelines) or for template sync configurations. When you create a repository link, Proton creates a service-linked role for you. For more information, see Self-managed provisioning, Template bundles, and Template sync configurations in the Proton Administrator Guide.
   */
  createRepository(params: Proton.Types.CreateRepositoryInput, callback?: (err: AWSError, data: Proton.Types.CreateRepositoryOutput) => void): Request<Proton.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Create and register a link to a repository that can be used with self-managed provisioning (infrastructure or pipelines) or for template sync configurations. When you create a repository link, Proton creates a service-linked role for you. For more information, see Self-managed provisioning, Template bundles, and Template sync configurations in the Proton Administrator Guide.
   */
  createRepository(callback?: (err: AWSError, data: Proton.Types.CreateRepositoryOutput) => void): Request<Proton.Types.CreateRepositoryOutput, AWSError>;
  /**
   * Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see Services in the Proton Administrator Guide and Services in the Proton User Guide.
   */
  createService(params: Proton.Types.CreateServiceInput, callback?: (err: AWSError, data: Proton.Types.CreateServiceOutput) => void): Request<Proton.Types.CreateServiceOutput, AWSError>;
  /**
   * Create an Proton service. An Proton service is an instantiation of a service template and often includes several service instances and pipeline. For more information, see Services in the Proton Administrator Guide and Services in the Proton User Guide.
   */
  createService(callback?: (err: AWSError, data: Proton.Types.CreateServiceOutput) => void): Request<Proton.Types.CreateServiceOutput, AWSError>;
  /**
   * Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see Service Templates in the Proton Administrator Guide.
   */
  createServiceTemplate(params: Proton.Types.CreateServiceTemplateInput, callback?: (err: AWSError, data: Proton.Types.CreateServiceTemplateOutput) => void): Request<Proton.Types.CreateServiceTemplateOutput, AWSError>;
  /**
   * Create a service template. The administrator creates a service template to define standardized infrastructure and an optional CI/CD service pipeline. Developers, in turn, select the service template from Proton. If the selected service template includes a service pipeline definition, they provide a link to their source code repository. Proton then deploys and manages the infrastructure defined by the selected service template. For more information, see Service Templates in the Proton Administrator Guide.
   */
  createServiceTemplate(callback?: (err: AWSError, data: Proton.Types.CreateServiceTemplateOutput) => void): Request<Proton.Types.CreateServiceTemplateOutput, AWSError>;
  /**
   * Create a new major or minor version of a service template. A major version of a service template is a version that isn't backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
   */
  createServiceTemplateVersion(params: Proton.Types.CreateServiceTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.CreateServiceTemplateVersionOutput) => void): Request<Proton.Types.CreateServiceTemplateVersionOutput, AWSError>;
  /**
   * Create a new major or minor version of a service template. A major version of a service template is a version that isn't backward compatible. A minor version of a service template is a version that's backward compatible within its major version.
   */
  createServiceTemplateVersion(callback?: (err: AWSError, data: Proton.Types.CreateServiceTemplateVersionOutput) => void): Request<Proton.Types.CreateServiceTemplateVersionOutput, AWSError>;
  /**
   * Set up a template to create new template versions automatically. When a commit is pushed to your registered repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see Template sync configurations in the Proton Administrator Guide.
   */
  createTemplateSyncConfig(params: Proton.Types.CreateTemplateSyncConfigInput, callback?: (err: AWSError, data: Proton.Types.CreateTemplateSyncConfigOutput) => void): Request<Proton.Types.CreateTemplateSyncConfigOutput, AWSError>;
  /**
   * Set up a template to create new template versions automatically. When a commit is pushed to your registered repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see Template sync configurations in the Proton Administrator Guide.
   */
  createTemplateSyncConfig(callback?: (err: AWSError, data: Proton.Types.CreateTemplateSyncConfigOutput) => void): Request<Proton.Types.CreateTemplateSyncConfigOutput, AWSError>;
  /**
   * Delete an environment.
   */
  deleteEnvironment(params: Proton.Types.DeleteEnvironmentInput, callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentOutput) => void): Request<Proton.Types.DeleteEnvironmentOutput, AWSError>;
  /**
   * Delete an environment.
   */
  deleteEnvironment(callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentOutput) => void): Request<Proton.Types.DeleteEnvironmentOutput, AWSError>;
  /**
   * In an environment account, delete an environment account connection. After you delete an environment account connection that’s in use by an Proton environment, Proton can’t manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection. For more information, see Environment account connections in the Proton Administrator guide.
   */
  deleteEnvironmentAccountConnection(params: Proton.Types.DeleteEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.DeleteEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * In an environment account, delete an environment account connection. After you delete an environment account connection that’s in use by an Proton environment, Proton can’t manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection. For more information, see Environment account connections in the Proton Administrator guide.
   */
  deleteEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.DeleteEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * If no other major or minor versions of an environment template exist, delete the environment template.
   */
  deleteEnvironmentTemplate(params: Proton.Types.DeleteEnvironmentTemplateInput, callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentTemplateOutput) => void): Request<Proton.Types.DeleteEnvironmentTemplateOutput, AWSError>;
  /**
   * If no other major or minor versions of an environment template exist, delete the environment template.
   */
  deleteEnvironmentTemplate(callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentTemplateOutput) => void): Request<Proton.Types.DeleteEnvironmentTemplateOutput, AWSError>;
  /**
   * If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the Recommended version. Delete the Recommended version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible. Delete a minor version of an environment template if it isn't the Recommended version. Delete a Recommended minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.
   */
  deleteEnvironmentTemplateVersion(params: Proton.Types.DeleteEnvironmentTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.DeleteEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * If no other minor versions of an environment template exist, delete a major version of the environment template if it's not the Recommended version. Delete the Recommended version of the environment template if no other major versions or minor versions of the environment template exist. A major version of an environment template is a version that's not backward compatible. Delete a minor version of an environment template if it isn't the Recommended version. Delete a Recommended minor version of the environment template if no other minor versions of the environment template exist. A minor version of an environment template is a version that's backward compatible.
   */
  deleteEnvironmentTemplateVersion(callback?: (err: AWSError, data: Proton.Types.DeleteEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.DeleteEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * De-register and unlink your repository.
   */
  deleteRepository(params: Proton.Types.DeleteRepositoryInput, callback?: (err: AWSError, data: Proton.Types.DeleteRepositoryOutput) => void): Request<Proton.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * De-register and unlink your repository.
   */
  deleteRepository(callback?: (err: AWSError, data: Proton.Types.DeleteRepositoryOutput) => void): Request<Proton.Types.DeleteRepositoryOutput, AWSError>;
  /**
   * Delete a service.
   */
  deleteService(params: Proton.Types.DeleteServiceInput, callback?: (err: AWSError, data: Proton.Types.DeleteServiceOutput) => void): Request<Proton.Types.DeleteServiceOutput, AWSError>;
  /**
   * Delete a service.
   */
  deleteService(callback?: (err: AWSError, data: Proton.Types.DeleteServiceOutput) => void): Request<Proton.Types.DeleteServiceOutput, AWSError>;
  /**
   * If no other major or minor versions of the service template exist, delete the service template.
   */
  deleteServiceTemplate(params: Proton.Types.DeleteServiceTemplateInput, callback?: (err: AWSError, data: Proton.Types.DeleteServiceTemplateOutput) => void): Request<Proton.Types.DeleteServiceTemplateOutput, AWSError>;
  /**
   * If no other major or minor versions of the service template exist, delete the service template.
   */
  deleteServiceTemplate(callback?: (err: AWSError, data: Proton.Types.DeleteServiceTemplateOutput) => void): Request<Proton.Types.DeleteServiceTemplateOutput, AWSError>;
  /**
   * If no other minor versions of a service template exist, delete a major version of the service template if it's not the Recommended version. Delete the Recommended version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that isn't backwards compatible. Delete a minor version of a service template if it's not the Recommended version. Delete a Recommended minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.
   */
  deleteServiceTemplateVersion(params: Proton.Types.DeleteServiceTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.DeleteServiceTemplateVersionOutput) => void): Request<Proton.Types.DeleteServiceTemplateVersionOutput, AWSError>;
  /**
   * If no other minor versions of a service template exist, delete a major version of the service template if it's not the Recommended version. Delete the Recommended version of the service template if no other major versions or minor versions of the service template exist. A major version of a service template is a version that isn't backwards compatible. Delete a minor version of a service template if it's not the Recommended version. Delete a Recommended minor version of the service template if no other minor versions of the service template exist. A minor version of a service template is a version that's backwards compatible.
   */
  deleteServiceTemplateVersion(callback?: (err: AWSError, data: Proton.Types.DeleteServiceTemplateVersionOutput) => void): Request<Proton.Types.DeleteServiceTemplateVersionOutput, AWSError>;
  /**
   * Delete a template sync configuration.
   */
  deleteTemplateSyncConfig(params: Proton.Types.DeleteTemplateSyncConfigInput, callback?: (err: AWSError, data: Proton.Types.DeleteTemplateSyncConfigOutput) => void): Request<Proton.Types.DeleteTemplateSyncConfigOutput, AWSError>;
  /**
   * Delete a template sync configuration.
   */
  deleteTemplateSyncConfig(callback?: (err: AWSError, data: Proton.Types.DeleteTemplateSyncConfigOutput) => void): Request<Proton.Types.DeleteTemplateSyncConfigOutput, AWSError>;
  /**
   * Get detail data for the Proton pipeline service role.
   */
  getAccountSettings(params: Proton.Types.GetAccountSettingsInput, callback?: (err: AWSError, data: Proton.Types.GetAccountSettingsOutput) => void): Request<Proton.Types.GetAccountSettingsOutput, AWSError>;
  /**
   * Get detail data for the Proton pipeline service role.
   */
  getAccountSettings(callback?: (err: AWSError, data: Proton.Types.GetAccountSettingsOutput) => void): Request<Proton.Types.GetAccountSettingsOutput, AWSError>;
  /**
   * Get detail data for an environment.
   */
  getEnvironment(params: Proton.Types.GetEnvironmentInput, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentOutput) => void): Request<Proton.Types.GetEnvironmentOutput, AWSError>;
  /**
   * Get detail data for an environment.
   */
  getEnvironment(callback?: (err: AWSError, data: Proton.Types.GetEnvironmentOutput) => void): Request<Proton.Types.GetEnvironmentOutput, AWSError>;
  /**
   * In an environment account, view the detail data for an environment account connection. For more information, see Environment account connections in the Proton Administrator guide.
   */
  getEnvironmentAccountConnection(params: Proton.Types.GetEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.GetEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * In an environment account, view the detail data for an environment account connection. For more information, see Environment account connections in the Proton Administrator guide.
   */
  getEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.GetEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.GetEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Get detail data for an environment template.
   */
  getEnvironmentTemplate(params: Proton.Types.GetEnvironmentTemplateInput, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateOutput) => void): Request<Proton.Types.GetEnvironmentTemplateOutput, AWSError>;
  /**
   * Get detail data for an environment template.
   */
  getEnvironmentTemplate(callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateOutput) => void): Request<Proton.Types.GetEnvironmentTemplateOutput, AWSError>;
  /**
   * View detail data for a major or minor version of an environment template.
   */
  getEnvironmentTemplateVersion(params: Proton.Types.GetEnvironmentTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.GetEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * View detail data for a major or minor version of an environment template.
   */
  getEnvironmentTemplateVersion(callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.GetEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Get detail data for a repository.
   */
  getRepository(params: Proton.Types.GetRepositoryInput, callback?: (err: AWSError, data: Proton.Types.GetRepositoryOutput) => void): Request<Proton.Types.GetRepositoryOutput, AWSError>;
  /**
   * Get detail data for a repository.
   */
  getRepository(callback?: (err: AWSError, data: Proton.Types.GetRepositoryOutput) => void): Request<Proton.Types.GetRepositoryOutput, AWSError>;
  /**
   * Get the sync status of a repository used for Proton template sync. For more information about template sync, see .  A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC). For more information about ABAC, see ABAC in the Proton Administrator Guide. 
   */
  getRepositorySyncStatus(params: Proton.Types.GetRepositorySyncStatusInput, callback?: (err: AWSError, data: Proton.Types.GetRepositorySyncStatusOutput) => void): Request<Proton.Types.GetRepositorySyncStatusOutput, AWSError>;
  /**
   * Get the sync status of a repository used for Proton template sync. For more information about template sync, see .  A repository sync status isn't tied to the Proton Repository resource (or any other Proton resource). Therefore, tags on an Proton Repository resource have no effect on this action. Specifically, you can't use these tags to control access to this action using Attribute-based access control (ABAC). For more information about ABAC, see ABAC in the Proton Administrator Guide. 
   */
  getRepositorySyncStatus(callback?: (err: AWSError, data: Proton.Types.GetRepositorySyncStatusOutput) => void): Request<Proton.Types.GetRepositorySyncStatusOutput, AWSError>;
  /**
   * Get detail data for a service.
   */
  getService(params: Proton.Types.GetServiceInput, callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Get detail data for a service.
   */
  getService(callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Get detail data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
   */
  getServiceInstance(params: Proton.Types.GetServiceInstanceInput, callback?: (err: AWSError, data: Proton.Types.GetServiceInstanceOutput) => void): Request<Proton.Types.GetServiceInstanceOutput, AWSError>;
  /**
   * Get detail data for a service instance. A service instance is an instantiation of service template and it runs in a specific environment.
   */
  getServiceInstance(callback?: (err: AWSError, data: Proton.Types.GetServiceInstanceOutput) => void): Request<Proton.Types.GetServiceInstanceOutput, AWSError>;
  /**
   * Get detail data for a service template.
   */
  getServiceTemplate(params: Proton.Types.GetServiceTemplateInput, callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateOutput) => void): Request<Proton.Types.GetServiceTemplateOutput, AWSError>;
  /**
   * Get detail data for a service template.
   */
  getServiceTemplate(callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateOutput) => void): Request<Proton.Types.GetServiceTemplateOutput, AWSError>;
  /**
   * View detail data for a major or minor version of a service template.
   */
  getServiceTemplateVersion(params: Proton.Types.GetServiceTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateVersionOutput) => void): Request<Proton.Types.GetServiceTemplateVersionOutput, AWSError>;
  /**
   * View detail data for a major or minor version of a service template.
   */
  getServiceTemplateVersion(callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateVersionOutput) => void): Request<Proton.Types.GetServiceTemplateVersionOutput, AWSError>;
  /**
   * Get detail data for a template sync configuration.
   */
  getTemplateSyncConfig(params: Proton.Types.GetTemplateSyncConfigInput, callback?: (err: AWSError, data: Proton.Types.GetTemplateSyncConfigOutput) => void): Request<Proton.Types.GetTemplateSyncConfigOutput, AWSError>;
  /**
   * Get detail data for a template sync configuration.
   */
  getTemplateSyncConfig(callback?: (err: AWSError, data: Proton.Types.GetTemplateSyncConfigOutput) => void): Request<Proton.Types.GetTemplateSyncConfigOutput, AWSError>;
  /**
   * Get the status of a template sync.
   */
  getTemplateSyncStatus(params: Proton.Types.GetTemplateSyncStatusInput, callback?: (err: AWSError, data: Proton.Types.GetTemplateSyncStatusOutput) => void): Request<Proton.Types.GetTemplateSyncStatusOutput, AWSError>;
  /**
   * Get the status of a template sync.
   */
  getTemplateSyncStatus(callback?: (err: AWSError, data: Proton.Types.GetTemplateSyncStatusOutput) => void): Request<Proton.Types.GetTemplateSyncStatusOutput, AWSError>;
  /**
   * View a list of environment account connections. For more information, see Environment account connections in the Proton Administrator guide.
   */
  listEnvironmentAccountConnections(params: Proton.Types.ListEnvironmentAccountConnectionsInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentAccountConnectionsOutput) => void): Request<Proton.Types.ListEnvironmentAccountConnectionsOutput, AWSError>;
  /**
   * View a list of environment account connections. For more information, see Environment account connections in the Proton Administrator guide.
   */
  listEnvironmentAccountConnections(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentAccountConnectionsOutput) => void): Request<Proton.Types.ListEnvironmentAccountConnectionsOutput, AWSError>;
  /**
   * List the infrastructure as code outputs for your environment.
   */
  listEnvironmentOutputs(params: Proton.Types.ListEnvironmentOutputsInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentOutputsOutput) => void): Request<Proton.Types.ListEnvironmentOutputsOutput, AWSError>;
  /**
   * List the infrastructure as code outputs for your environment.
   */
  listEnvironmentOutputs(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentOutputsOutput) => void): Request<Proton.Types.ListEnvironmentOutputsOutput, AWSError>;
  /**
   * List the provisioned resources for your environment.
   */
  listEnvironmentProvisionedResources(params: Proton.Types.ListEnvironmentProvisionedResourcesInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentProvisionedResourcesOutput) => void): Request<Proton.Types.ListEnvironmentProvisionedResourcesOutput, AWSError>;
  /**
   * List the provisioned resources for your environment.
   */
  listEnvironmentProvisionedResources(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentProvisionedResourcesOutput) => void): Request<Proton.Types.ListEnvironmentProvisionedResourcesOutput, AWSError>;
  /**
   * List major or minor versions of an environment template with detail data.
   */
  listEnvironmentTemplateVersions(params: Proton.Types.ListEnvironmentTemplateVersionsInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentTemplateVersionsOutput) => void): Request<Proton.Types.ListEnvironmentTemplateVersionsOutput, AWSError>;
  /**
   * List major or minor versions of an environment template with detail data.
   */
  listEnvironmentTemplateVersions(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentTemplateVersionsOutput) => void): Request<Proton.Types.ListEnvironmentTemplateVersionsOutput, AWSError>;
  /**
   * List environment templates.
   */
  listEnvironmentTemplates(params: Proton.Types.ListEnvironmentTemplatesInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentTemplatesOutput) => void): Request<Proton.Types.ListEnvironmentTemplatesOutput, AWSError>;
  /**
   * List environment templates.
   */
  listEnvironmentTemplates(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentTemplatesOutput) => void): Request<Proton.Types.ListEnvironmentTemplatesOutput, AWSError>;
  /**
   * List environments with detail data summaries.
   */
  listEnvironments(params: Proton.Types.ListEnvironmentsInput, callback?: (err: AWSError, data: Proton.Types.ListEnvironmentsOutput) => void): Request<Proton.Types.ListEnvironmentsOutput, AWSError>;
  /**
   * List environments with detail data summaries.
   */
  listEnvironments(callback?: (err: AWSError, data: Proton.Types.ListEnvironmentsOutput) => void): Request<Proton.Types.ListEnvironmentsOutput, AWSError>;
  /**
   * List repositories with detail data.
   */
  listRepositories(params: Proton.Types.ListRepositoriesInput, callback?: (err: AWSError, data: Proton.Types.ListRepositoriesOutput) => void): Request<Proton.Types.ListRepositoriesOutput, AWSError>;
  /**
   * List repositories with detail data.
   */
  listRepositories(callback?: (err: AWSError, data: Proton.Types.ListRepositoriesOutput) => void): Request<Proton.Types.ListRepositoriesOutput, AWSError>;
  /**
   * List repository sync definitions with detail data.
   */
  listRepositorySyncDefinitions(params: Proton.Types.ListRepositorySyncDefinitionsInput, callback?: (err: AWSError, data: Proton.Types.ListRepositorySyncDefinitionsOutput) => void): Request<Proton.Types.ListRepositorySyncDefinitionsOutput, AWSError>;
  /**
   * List repository sync definitions with detail data.
   */
  listRepositorySyncDefinitions(callback?: (err: AWSError, data: Proton.Types.ListRepositorySyncDefinitionsOutput) => void): Request<Proton.Types.ListRepositorySyncDefinitionsOutput, AWSError>;
  /**
   * View a list service instance infrastructure as code outputs with detail data.
   */
  listServiceInstanceOutputs(params: Proton.Types.ListServiceInstanceOutputsInput, callback?: (err: AWSError, data: Proton.Types.ListServiceInstanceOutputsOutput) => void): Request<Proton.Types.ListServiceInstanceOutputsOutput, AWSError>;
  /**
   * View a list service instance infrastructure as code outputs with detail data.
   */
  listServiceInstanceOutputs(callback?: (err: AWSError, data: Proton.Types.ListServiceInstanceOutputsOutput) => void): Request<Proton.Types.ListServiceInstanceOutputsOutput, AWSError>;
  /**
   * List provisioned resources for a service instance with details.
   */
  listServiceInstanceProvisionedResources(params: Proton.Types.ListServiceInstanceProvisionedResourcesInput, callback?: (err: AWSError, data: Proton.Types.ListServiceInstanceProvisionedResourcesOutput) => void): Request<Proton.Types.ListServiceInstanceProvisionedResourcesOutput, AWSError>;
  /**
   * List provisioned resources for a service instance with details.
   */
  listServiceInstanceProvisionedResources(callback?: (err: AWSError, data: Proton.Types.ListServiceInstanceProvisionedResourcesOutput) => void): Request<Proton.Types.ListServiceInstanceProvisionedResourcesOutput, AWSError>;
  /**
   * List service instances with summaries of detail data.
   */
  listServiceInstances(params: Proton.Types.ListServiceInstancesInput, callback?: (err: AWSError, data: Proton.Types.ListServiceInstancesOutput) => void): Request<Proton.Types.ListServiceInstancesOutput, AWSError>;
  /**
   * List service instances with summaries of detail data.
   */
  listServiceInstances(callback?: (err: AWSError, data: Proton.Types.ListServiceInstancesOutput) => void): Request<Proton.Types.ListServiceInstancesOutput, AWSError>;
  /**
   * View a list service pipeline infrastructure as code outputs with detail.
   */
  listServicePipelineOutputs(params: Proton.Types.ListServicePipelineOutputsInput, callback?: (err: AWSError, data: Proton.Types.ListServicePipelineOutputsOutput) => void): Request<Proton.Types.ListServicePipelineOutputsOutput, AWSError>;
  /**
   * View a list service pipeline infrastructure as code outputs with detail.
   */
  listServicePipelineOutputs(callback?: (err: AWSError, data: Proton.Types.ListServicePipelineOutputsOutput) => void): Request<Proton.Types.ListServicePipelineOutputsOutput, AWSError>;
  /**
   * List provisioned resources for a service and pipeline with details.
   */
  listServicePipelineProvisionedResources(params: Proton.Types.ListServicePipelineProvisionedResourcesInput, callback?: (err: AWSError, data: Proton.Types.ListServicePipelineProvisionedResourcesOutput) => void): Request<Proton.Types.ListServicePipelineProvisionedResourcesOutput, AWSError>;
  /**
   * List provisioned resources for a service and pipeline with details.
   */
  listServicePipelineProvisionedResources(callback?: (err: AWSError, data: Proton.Types.ListServicePipelineProvisionedResourcesOutput) => void): Request<Proton.Types.ListServicePipelineProvisionedResourcesOutput, AWSError>;
  /**
   * List major or minor versions of a service template with detail data.
   */
  listServiceTemplateVersions(params: Proton.Types.ListServiceTemplateVersionsInput, callback?: (err: AWSError, data: Proton.Types.ListServiceTemplateVersionsOutput) => void): Request<Proton.Types.ListServiceTemplateVersionsOutput, AWSError>;
  /**
   * List major or minor versions of a service template with detail data.
   */
  listServiceTemplateVersions(callback?: (err: AWSError, data: Proton.Types.ListServiceTemplateVersionsOutput) => void): Request<Proton.Types.ListServiceTemplateVersionsOutput, AWSError>;
  /**
   * List service templates with detail data.
   */
  listServiceTemplates(params: Proton.Types.ListServiceTemplatesInput, callback?: (err: AWSError, data: Proton.Types.ListServiceTemplatesOutput) => void): Request<Proton.Types.ListServiceTemplatesOutput, AWSError>;
  /**
   * List service templates with detail data.
   */
  listServiceTemplates(callback?: (err: AWSError, data: Proton.Types.ListServiceTemplatesOutput) => void): Request<Proton.Types.ListServiceTemplatesOutput, AWSError>;
  /**
   * List services with summaries of detail data.
   */
  listServices(params: Proton.Types.ListServicesInput, callback?: (err: AWSError, data: Proton.Types.ListServicesOutput) => void): Request<Proton.Types.ListServicesOutput, AWSError>;
  /**
   * List services with summaries of detail data.
   */
  listServices(callback?: (err: AWSError, data: Proton.Types.ListServicesOutput) => void): Request<Proton.Types.ListServicesOutput, AWSError>;
  /**
   * List tags for a resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  listTagsForResource(params: Proton.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: Proton.Types.ListTagsForResourceOutput) => void): Request<Proton.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * List tags for a resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Proton.Types.ListTagsForResourceOutput) => void): Request<Proton.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Notify Proton of status changes to a provisioned resource when you use self-managed provisioning. For more information, see Self-managed provisioning in the Proton Administrator Guide.
   */
  notifyResourceDeploymentStatusChange(params: Proton.Types.NotifyResourceDeploymentStatusChangeInput, callback?: (err: AWSError, data: Proton.Types.NotifyResourceDeploymentStatusChangeOutput) => void): Request<Proton.Types.NotifyResourceDeploymentStatusChangeOutput, AWSError>;
  /**
   * Notify Proton of status changes to a provisioned resource when you use self-managed provisioning. For more information, see Self-managed provisioning in the Proton Administrator Guide.
   */
  notifyResourceDeploymentStatusChange(callback?: (err: AWSError, data: Proton.Types.NotifyResourceDeploymentStatusChangeOutput) => void): Request<Proton.Types.NotifyResourceDeploymentStatusChangeOutput, AWSError>;
  /**
   * In a management account, reject an environment account connection from another environment account. After you reject an environment account connection request, you can't accept or use the rejected environment account connection. You can’t reject an environment account connection that's connected to an environment. For more information, see Environment account connections in the Proton Administrator guide.
   */
  rejectEnvironmentAccountConnection(params: Proton.Types.RejectEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.RejectEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.RejectEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * In a management account, reject an environment account connection from another environment account. After you reject an environment account connection request, you can't accept or use the rejected environment account connection. You can’t reject an environment account connection that's connected to an environment. For more information, see Environment account connections in the Proton Administrator guide.
   */
  rejectEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.RejectEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.RejectEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  tagResource(params: Proton.Types.TagResourceInput, callback?: (err: AWSError, data: Proton.Types.TagResourceOutput) => void): Request<Proton.Types.TagResourceOutput, AWSError>;
  /**
   * Tag a resource. A tag is a key-value pair of metadata that you associate with an Proton resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  tagResource(callback?: (err: AWSError, data: Proton.Types.TagResourceOutput) => void): Request<Proton.Types.TagResourceOutput, AWSError>;
  /**
   * Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  untagResource(params: Proton.Types.UntagResourceInput, callback?: (err: AWSError, data: Proton.Types.UntagResourceOutput) => void): Request<Proton.Types.UntagResourceOutput, AWSError>;
  /**
   * Remove a customer tag from a resource. A tag is a key-value pair of metadata associated with an Proton resource. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
   */
  untagResource(callback?: (err: AWSError, data: Proton.Types.UntagResourceOutput) => void): Request<Proton.Types.UntagResourceOutput, AWSError>;
  /**
   * Update the Proton service pipeline role or repository settings.
   */
  updateAccountSettings(params: Proton.Types.UpdateAccountSettingsInput, callback?: (err: AWSError, data: Proton.Types.UpdateAccountSettingsOutput) => void): Request<Proton.Types.UpdateAccountSettingsOutput, AWSError>;
  /**
   * Update the Proton service pipeline role or repository settings.
   */
  updateAccountSettings(callback?: (err: AWSError, data: Proton.Types.UpdateAccountSettingsOutput) => void): Request<Proton.Types.UpdateAccountSettingsOutput, AWSError>;
  /**
   * Update an environment. If the environment is associated with an environment account connection, don't update or include the protonServiceRoleArn and provisioningRepository parameter to update or connect to an environment account connection. You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment. If the environment isn't associated with an environment account connection, don't update or include the environmentAccountConnectionId parameter. You can't update or connect the environment to an environment account connection if it isn't already associated with an environment connection. You can update either the environmentAccountConnectionId or protonServiceRoleArn parameter and value. You can’t update both. If the environment was configured for Amazon Web Services-managed provisioning, omit the provisioningRepository parameter. If the environment was configured for self-managed provisioning, specify the provisioningRepository parameter and omit the protonServiceRoleArn and environmentAccountConnectionId parameters. For more information, see Environments and Provisioning methods in the Proton Administrator Guide. There are four modes for updating an environment. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateEnvironment(params: Proton.Types.UpdateEnvironmentInput, callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentOutput) => void): Request<Proton.Types.UpdateEnvironmentOutput, AWSError>;
  /**
   * Update an environment. If the environment is associated with an environment account connection, don't update or include the protonServiceRoleArn and provisioningRepository parameter to update or connect to an environment account connection. You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment. If the environment isn't associated with an environment account connection, don't update or include the environmentAccountConnectionId parameter. You can't update or connect the environment to an environment account connection if it isn't already associated with an environment connection. You can update either the environmentAccountConnectionId or protonServiceRoleArn parameter and value. You can’t update both. If the environment was configured for Amazon Web Services-managed provisioning, omit the provisioningRepository parameter. If the environment was configured for self-managed provisioning, specify the provisioningRepository parameter and omit the protonServiceRoleArn and environmentAccountConnectionId parameters. For more information, see Environments and Provisioning methods in the Proton Administrator Guide. There are four modes for updating an environment. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateEnvironment(callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentOutput) => void): Request<Proton.Types.UpdateEnvironmentOutput, AWSError>;
  /**
   * In an environment account, update an environment account connection to use a new IAM role. For more information, see Environment account connections in the Proton Administrator guide.
   */
  updateEnvironmentAccountConnection(params: Proton.Types.UpdateEnvironmentAccountConnectionInput, callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.UpdateEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * In an environment account, update an environment account connection to use a new IAM role. For more information, see Environment account connections in the Proton Administrator guide.
   */
  updateEnvironmentAccountConnection(callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentAccountConnectionOutput) => void): Request<Proton.Types.UpdateEnvironmentAccountConnectionOutput, AWSError>;
  /**
   * Update an environment template.
   */
  updateEnvironmentTemplate(params: Proton.Types.UpdateEnvironmentTemplateInput, callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentTemplateOutput) => void): Request<Proton.Types.UpdateEnvironmentTemplateOutput, AWSError>;
  /**
   * Update an environment template.
   */
  updateEnvironmentTemplate(callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentTemplateOutput) => void): Request<Proton.Types.UpdateEnvironmentTemplateOutput, AWSError>;
  /**
   * Update a major or minor version of an environment template.
   */
  updateEnvironmentTemplateVersion(params: Proton.Types.UpdateEnvironmentTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.UpdateEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Update a major or minor version of an environment template.
   */
  updateEnvironmentTemplateVersion(callback?: (err: AWSError, data: Proton.Types.UpdateEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.UpdateEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Edit a service description or use a spec to add and delete service instances.  Existing service instances and the service pipeline can't be edited using this API. They can only be deleted.  Use the description parameter to modify the description. Edit the spec parameter to add or delete instances.
   */
  updateService(params: Proton.Types.UpdateServiceInput, callback?: (err: AWSError, data: Proton.Types.UpdateServiceOutput) => void): Request<Proton.Types.UpdateServiceOutput, AWSError>;
  /**
   * Edit a service description or use a spec to add and delete service instances.  Existing service instances and the service pipeline can't be edited using this API. They can only be deleted.  Use the description parameter to modify the description. Edit the spec parameter to add or delete instances.
   */
  updateService(callback?: (err: AWSError, data: Proton.Types.UpdateServiceOutput) => void): Request<Proton.Types.UpdateServiceOutput, AWSError>;
  /**
   * Update a service instance. There are four modes for updating a service instance. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateServiceInstance(params: Proton.Types.UpdateServiceInstanceInput, callback?: (err: AWSError, data: Proton.Types.UpdateServiceInstanceOutput) => void): Request<Proton.Types.UpdateServiceInstanceOutput, AWSError>;
  /**
   * Update a service instance. There are four modes for updating a service instance. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include minor or major version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateServiceInstance(callback?: (err: AWSError, data: Proton.Types.UpdateServiceInstanceOutput) => void): Request<Proton.Types.UpdateServiceInstanceOutput, AWSError>;
  /**
   * Update the service pipeline. There are four modes for updating a service pipeline. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateServicePipeline(params: Proton.Types.UpdateServicePipelineInput, callback?: (err: AWSError, data: Proton.Types.UpdateServicePipelineOutput) => void): Request<Proton.Types.UpdateServicePipelineOutput, AWSError>;
  /**
   * Update the service pipeline. There are four modes for updating a service pipeline. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.  
   */
  updateServicePipeline(callback?: (err: AWSError, data: Proton.Types.UpdateServicePipelineOutput) => void): Request<Proton.Types.UpdateServicePipelineOutput, AWSError>;
  /**
   * Update a service template.
   */
  updateServiceTemplate(params: Proton.Types.UpdateServiceTemplateInput, callback?: (err: AWSError, data: Proton.Types.UpdateServiceTemplateOutput) => void): Request<Proton.Types.UpdateServiceTemplateOutput, AWSError>;
  /**
   * Update a service template.
   */
  updateServiceTemplate(callback?: (err: AWSError, data: Proton.Types.UpdateServiceTemplateOutput) => void): Request<Proton.Types.UpdateServiceTemplateOutput, AWSError>;
  /**
   * Update a major or minor version of a service template.
   */
  updateServiceTemplateVersion(params: Proton.Types.UpdateServiceTemplateVersionInput, callback?: (err: AWSError, data: Proton.Types.UpdateServiceTemplateVersionOutput) => void): Request<Proton.Types.UpdateServiceTemplateVersionOutput, AWSError>;
  /**
   * Update a major or minor version of a service template.
   */
  updateServiceTemplateVersion(callback?: (err: AWSError, data: Proton.Types.UpdateServiceTemplateVersionOutput) => void): Request<Proton.Types.UpdateServiceTemplateVersionOutput, AWSError>;
  /**
   * Update template sync configuration parameters, except for the templateName and templateType.
   */
  updateTemplateSyncConfig(params: Proton.Types.UpdateTemplateSyncConfigInput, callback?: (err: AWSError, data: Proton.Types.UpdateTemplateSyncConfigOutput) => void): Request<Proton.Types.UpdateTemplateSyncConfigOutput, AWSError>;
  /**
   * Update template sync configuration parameters, except for the templateName and templateType.
   */
  updateTemplateSyncConfig(callback?: (err: AWSError, data: Proton.Types.UpdateTemplateSyncConfigOutput) => void): Request<Proton.Types.UpdateTemplateSyncConfigOutput, AWSError>;
  /**
   * Waits for the environmentDeployed state by periodically calling the underlying Proton.getEnvironmentoperation every 5 seconds (at most 999 times). Wait until an Environment is deployed. Use this after invoking CreateEnvironment or UpdateEnvironment
   */
  waitFor(state: "environmentDeployed", params: Proton.Types.GetEnvironmentInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentOutput) => void): Request<Proton.Types.GetEnvironmentOutput, AWSError>;
  /**
   * Waits for the environmentDeployed state by periodically calling the underlying Proton.getEnvironmentoperation every 5 seconds (at most 999 times). Wait until an Environment is deployed. Use this after invoking CreateEnvironment or UpdateEnvironment
   */
  waitFor(state: "environmentDeployed", callback?: (err: AWSError, data: Proton.Types.GetEnvironmentOutput) => void): Request<Proton.Types.GetEnvironmentOutput, AWSError>;
  /**
   * Waits for the environmentTemplateVersionRegistered state by periodically calling the underlying Proton.getEnvironmentTemplateVersionoperation every 2 seconds (at most 150 times). Wait until an EnvironmentTemplateVersion is registered. Use this after invoking CreateEnvironmentTemplateVersion
   */
  waitFor(state: "environmentTemplateVersionRegistered", params: Proton.Types.GetEnvironmentTemplateVersionInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.GetEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Waits for the environmentTemplateVersionRegistered state by periodically calling the underlying Proton.getEnvironmentTemplateVersionoperation every 2 seconds (at most 150 times). Wait until an EnvironmentTemplateVersion is registered. Use this after invoking CreateEnvironmentTemplateVersion
   */
  waitFor(state: "environmentTemplateVersionRegistered", callback?: (err: AWSError, data: Proton.Types.GetEnvironmentTemplateVersionOutput) => void): Request<Proton.Types.GetEnvironmentTemplateVersionOutput, AWSError>;
  /**
   * Waits for the serviceCreated state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until an Service has deployed its instances and possibly pipeline. Use this after invoking CreateService
   */
  waitFor(state: "serviceCreated", params: Proton.Types.GetServiceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceCreated state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until an Service has deployed its instances and possibly pipeline. Use this after invoking CreateService
   */
  waitFor(state: "serviceCreated", callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceDeleted state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until a Service, its instances, and possibly pipeline have been deleted after DeleteService is invoked
   */
  waitFor(state: "serviceDeleted", params: Proton.Types.GetServiceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceDeleted state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until a Service, its instances, and possibly pipeline have been deleted after DeleteService is invoked
   */
  waitFor(state: "serviceDeleted", callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceInstanceDeployed state by periodically calling the underlying Proton.getServiceInstanceoperation every 5 seconds (at most 999 times). Wait until a ServiceInstance is deployed. Use this after invoking CreateService or UpdateServiceInstance
   */
  waitFor(state: "serviceInstanceDeployed", params: Proton.Types.GetServiceInstanceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceInstanceOutput) => void): Request<Proton.Types.GetServiceInstanceOutput, AWSError>;
  /**
   * Waits for the serviceInstanceDeployed state by periodically calling the underlying Proton.getServiceInstanceoperation every 5 seconds (at most 999 times). Wait until a ServiceInstance is deployed. Use this after invoking CreateService or UpdateServiceInstance
   */
  waitFor(state: "serviceInstanceDeployed", callback?: (err: AWSError, data: Proton.Types.GetServiceInstanceOutput) => void): Request<Proton.Types.GetServiceInstanceOutput, AWSError>;
  /**
   * Waits for the servicePipelineDeployed state by periodically calling the underlying Proton.getServiceoperation every 10 seconds (at most 360 times). Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
   */
  waitFor(state: "servicePipelineDeployed", params: Proton.Types.GetServiceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the servicePipelineDeployed state by periodically calling the underlying Proton.getServiceoperation every 10 seconds (at most 360 times). Wait until an ServicePipeline is deployed. Use this after invoking CreateService or UpdateServicePipeline
   */
  waitFor(state: "servicePipelineDeployed", callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceTemplateVersionRegistered state by periodically calling the underlying Proton.getServiceTemplateVersionoperation every 2 seconds (at most 150 times). Wait until a ServiceTemplateVersion is registered. Use this after invoking CreateServiceTemplateVersion
   */
  waitFor(state: "serviceTemplateVersionRegistered", params: Proton.Types.GetServiceTemplateVersionInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateVersionOutput) => void): Request<Proton.Types.GetServiceTemplateVersionOutput, AWSError>;
  /**
   * Waits for the serviceTemplateVersionRegistered state by periodically calling the underlying Proton.getServiceTemplateVersionoperation every 2 seconds (at most 150 times). Wait until a ServiceTemplateVersion is registered. Use this after invoking CreateServiceTemplateVersion
   */
  waitFor(state: "serviceTemplateVersionRegistered", callback?: (err: AWSError, data: Proton.Types.GetServiceTemplateVersionOutput) => void): Request<Proton.Types.GetServiceTemplateVersionOutput, AWSError>;
  /**
   * Waits for the serviceUpdated state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until a Service, its instances, and possibly pipeline have been deployed after UpdateService is invoked
   */
  waitFor(state: "serviceUpdated", params: Proton.Types.GetServiceInput & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
  /**
   * Waits for the serviceUpdated state by periodically calling the underlying Proton.getServiceoperation every 5 seconds (at most 999 times). Wait until a Service, its instances, and possibly pipeline have been deployed after UpdateService is invoked
   */
  waitFor(state: "serviceUpdated", callback?: (err: AWSError, data: Proton.Types.GetServiceOutput) => void): Request<Proton.Types.GetServiceOutput, AWSError>;
}
declare namespace Proton {
  export interface AcceptEnvironmentAccountConnectionInput {
    /**
     * The ID of the environment account connection.
     */
    id: EnvironmentAccountConnectionId;
  }
  export interface AcceptEnvironmentAccountConnectionOutput {
    /**
     * The environment account connection data that's returned by Proton.
     */
    environmentAccountConnection: EnvironmentAccountConnection;
  }
  export interface AccountSettings {
    /**
     * The repository configured in the Amazon Web Services account for pipeline provisioning. Required it if you have environments configured for self-managed provisioning with services that include pipelines.
     */
    pipelineProvisioningRepository?: RepositoryBranch;
    /**
     * The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.
     */
    pipelineServiceRoleArn?: PipelineRoleArn;
  }
  export type Arn = string;
  export type AwsAccountId = string;
  export interface CancelEnvironmentDeploymentInput {
    /**
     * The name of the environment with the deployment to cancel.
     */
    environmentName: ResourceName;
  }
  export interface CancelEnvironmentDeploymentOutput {
    /**
     * The environment summary data that's returned by Proton.
     */
    environment: Environment;
  }
  export interface CancelServiceInstanceDeploymentInput {
    /**
     * The name of the service instance with the deployment to cancel.
     */
    serviceInstanceName: ResourceName;
    /**
     * The name of the service with the service instance deployment to cancel.
     */
    serviceName: ResourceName;
  }
  export interface CancelServiceInstanceDeploymentOutput {
    /**
     * The service instance summary data that's returned by Proton.
     */
    serviceInstance: ServiceInstance;
  }
  export interface CancelServicePipelineDeploymentInput {
    /**
     * The name of the service with the service pipeline deployment to cancel.
     */
    serviceName: ResourceName;
  }
  export interface CancelServicePipelineDeploymentOutput {
    /**
     * The service pipeline detail data that's returned by Proton.
     */
    pipeline: ServicePipeline;
  }
  export type ClientToken = string;
  export interface CompatibleEnvironmentTemplate {
    /**
     * The major version of the compatible environment template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The compatible environment template name.
     */
    templateName: ResourceName;
  }
  export interface CompatibleEnvironmentTemplateInput {
    /**
     * The major version of the compatible environment template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The compatible environment template name.
     */
    templateName: ResourceName;
  }
  export type CompatibleEnvironmentTemplateInputList = CompatibleEnvironmentTemplateInput[];
  export type CompatibleEnvironmentTemplateList = CompatibleEnvironmentTemplate[];
  export interface CreateEnvironmentAccountConnectionInput {
    /**
     * When included, if two identical requests are made with the same client token, Proton returns the environment account connection that the first request created.
     */
    clientToken?: ClientToken;
    /**
     * The name of the Proton environment that's created in the associated management account.
     */
    environmentName: ResourceName;
    /**
     * The ID of the management account that accepts or rejects the environment account connection. You create and manage the Proton environment in this account. If the management account accepts the environment account connection, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
     */
    managementAccountId: AwsAccountId;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. Proton uses this role to provision infrastructure resources in the associated environment account.
     */
    roleArn: Arn;
    /**
     * An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide.
     */
    tags?: TagList;
  }
  export interface CreateEnvironmentAccountConnectionOutput {
    /**
     * The environment account connection detail data that's returned by Proton.
     */
    environmentAccountConnection: EnvironmentAccountConnection;
  }
  export interface CreateEnvironmentInput {
    /**
     * A description of the environment that's being created and deployed.
     */
    description?: Description;
    /**
     * The ID of the environment account connection that you provide if you're provisioning your environment infrastructure resources to an environment account. For more information, see Environment account connections in the Proton Administrator guide. To use Amazon Web Services-managed provisioning for the environment, specify either the environmentAccountConnectionId or protonServiceRoleArn parameter and omit the provisioningRepository parameter.
     */
    environmentAccountConnectionId?: EnvironmentAccountConnectionId;
    /**
     * The name of the environment.
     */
    name: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf. To use Amazon Web Services-managed provisioning for the environment, specify either the environmentAccountConnectionId or protonServiceRoleArn parameter and omit the provisioningRepository parameter.
     */
    protonServiceRoleArn?: Arn;
    /**
     * The infrastructure repository that you use to host your rendered infrastructure templates for self-managed provisioning. To use self-managed provisioning for the environment, specify this parameter and omit the environmentAccountConnectionId and protonServiceRoleArn parameters.
     */
    provisioningRepository?: RepositoryBranchInput;
    /**
     * A YAML formatted string that provides inputs as defined in the environment template bundle schema file. For more information, see Environments in the Proton Administrator Guide.
     */
    spec: SpecContents;
    /**
     * An optional list of metadata items that you can associate with the Proton environment. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
    /**
     * The major version of the environment template.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the environment template.
     */
    templateMinorVersion?: TemplateVersionPart;
    /**
     * The name of the environment template. For more information, see Environment Templates in the Proton Administrator Guide.
     */
    templateName: ResourceName;
  }
  export interface CreateEnvironmentOutput {
    /**
     * The environment detail data that's returned by Proton.
     */
    environment: Environment;
  }
  export interface CreateEnvironmentTemplateInput {
    /**
     * A description of the environment template.
     */
    description?: Description;
    /**
     * The environment template name as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * A customer provided encryption key that Proton uses to encrypt data.
     */
    encryptionKey?: Arn;
    /**
     * The name of the environment template.
     */
    name: ResourceName;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: Provisioning;
    /**
     * An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
  }
  export interface CreateEnvironmentTemplateOutput {
    /**
     * The environment template detail data that's returned by Proton.
     */
    environmentTemplate: EnvironmentTemplate;
  }
  export interface CreateEnvironmentTemplateVersionInput {
    /**
     * When included, if two identical requests are made with the same client token, Proton returns the environment template version that the first request created.
     */
    clientToken?: ClientToken;
    /**
     * A description of the new version of an environment template.
     */
    description?: Description;
    /**
     * To create a new minor version of the environment template, include major Version. To create a new major and minor version of the environment template, exclude major Version.
     */
    majorVersion?: TemplateVersionPart;
    /**
     * An object that includes the template bundle S3 bucket path and name for the new version of an template.
     */
    source: TemplateVersionSourceInput;
    /**
     * An optional list of metadata items that you can associate with the Proton environment template version. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export interface CreateEnvironmentTemplateVersionOutput {
    /**
     * The environment template detail data that's returned by Proton.
     */
    environmentTemplateVersion: EnvironmentTemplateVersion;
  }
  export interface CreateRepositoryInput {
    /**
     * The Amazon Resource Name (ARN) of your Amazon Web Services CodeStar connection. For more information, see Setting up for Proton in the Proton Administrator Guide.
     */
    connectionArn: Arn;
    /**
     * The ARN of your customer Amazon Web Services Key Management Service (Amazon Web Services KMS) key.
     */
    encryptionKey?: Arn;
    /**
     * The repository name (for example, myrepos/myrepo).
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
    /**
     * An optional list of metadata items that you can associate with the Proton repository. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
  }
  export interface CreateRepositoryOutput {
    /**
     * The repository detail data that's returned by Proton.
     */
    repository: Repository;
  }
  export interface CreateServiceInput {
    /**
     * The name of the code repository branch that holds the code that's deployed in Proton. Don't include this parameter if your service template doesn't include a service pipeline.
     */
    branchName?: GitBranchName;
    /**
     * A description of the Proton service.
     */
    description?: Description;
    /**
     * The service name.
     */
    name: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the repository connection. For more information, see Set up repository connection in the Proton Administrator Guide and Setting up with Proton in the Proton User Guide. Don't include this parameter if your service template doesn't include a service pipeline.
     */
    repositoryConnectionArn?: Arn;
    /**
     * The ID of the code repository. Don't include this parameter if your service template doesn't include a service pipeline.
     */
    repositoryId?: RepositoryId;
    /**
     * A link to a spec file that provides inputs as defined in the service template bundle schema file. The spec file is in YAML format. Don’t include pipeline inputs in the spec if your service template doesn’t include a service pipeline. For more information, see Create a service in the Proton Administrator Guide and Create a service in the Proton User Guide.
     */
    spec: SpecContents;
    /**
     * An optional list of metadata items that you can associate with the Proton service. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
    /**
     * The major version of the service template that was used to create the service.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the service template that was used to create the service.
     */
    templateMinorVersion?: TemplateVersionPart;
    /**
     * The name of the service template that's used to create the service.
     */
    templateName: ResourceName;
  }
  export interface CreateServiceOutput {
    /**
     * The service detail data that's returned by Proton.
     */
    service: Service;
  }
  export interface CreateServiceTemplateInput {
    /**
     * A description of the service template.
     */
    description?: Description;
    /**
     * The name of the service template as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * A customer provided encryption key that's used to encrypt data.
     */
    encryptionKey?: Arn;
    /**
     * The name of the service template.
     */
    name: ResourceName;
    /**
     * By default, Proton provides a service pipeline for your service. When this parameter is included, it indicates that an Proton service pipeline isn't provided for your service. After it's included, it can't be changed. For more information, see Service template bundles in the Proton Administrator Guide.
     */
    pipelineProvisioning?: Provisioning;
    /**
     * An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
  }
  export interface CreateServiceTemplateOutput {
    /**
     * The service template detail data that's returned by Proton.
     */
    serviceTemplate: ServiceTemplate;
  }
  export interface CreateServiceTemplateVersionInput {
    /**
     * When included, if two identical requests are made with the same client token, Proton returns the service template version that the first request created.
     */
    clientToken?: ClientToken;
    /**
     * An array of compatible environment template objects for the new version of a service template.
     */
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInputList;
    /**
     * A description of the new version of a service template.
     */
    description?: Description;
    /**
     * To create a new minor version of the service template, include a major Version. To create a new major and minor version of the service template, exclude major Version.
     */
    majorVersion?: TemplateVersionPart;
    /**
     * An object that includes the template bundle S3 bucket path and name for the new version of a service template.
     */
    source: TemplateVersionSourceInput;
    /**
     * An optional list of metadata items that you can associate with the Proton service template version. A tag is a key-value pair. For more information, see Proton resources and tagging in the Proton Administrator Guide or Proton User Guide.
     */
    tags?: TagList;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export interface CreateServiceTemplateVersionOutput {
    /**
     * The service template version summary of detail data that's returned by Proton.
     */
    serviceTemplateVersion: ServiceTemplateVersion;
  }
  export interface CreateTemplateSyncConfigInput {
    /**
     * The branch of the registered repository for your template.
     */
    branch: GitBranchName;
    /**
     * The name of your repository (for example, myrepos/myrepo).
     */
    repositoryName: RepositoryName;
    /**
     * The provider type for your repository.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * A repository subdirectory path to your template bundle directory. When included, Proton limits the template bundle search to this repository directory.
     */
    subdirectory?: Subdirectory;
    /**
     * The name of your registered template.
     */
    templateName: ResourceName;
    /**
     * The type of the registered template.
     */
    templateType: TemplateType;
  }
  export interface CreateTemplateSyncConfigOutput {
    /**
     * The template sync configuration detail data that's returned by Proton.
     */
    templateSyncConfig?: TemplateSyncConfig;
  }
  export interface DeleteEnvironmentAccountConnectionInput {
    /**
     * The ID of the environment account connection to delete.
     */
    id: EnvironmentAccountConnectionId;
  }
  export interface DeleteEnvironmentAccountConnectionOutput {
    /**
     * The environment account connection detail data that's returned by Proton.
     */
    environmentAccountConnection?: EnvironmentAccountConnection;
  }
  export interface DeleteEnvironmentInput {
    /**
     * The name of the environment to delete.
     */
    name: ResourceName;
  }
  export interface DeleteEnvironmentOutput {
    /**
     * The environment detail data that's returned by Proton.
     */
    environment?: Environment;
  }
  export interface DeleteEnvironmentTemplateInput {
    /**
     * The name of the environment template to delete.
     */
    name: ResourceName;
  }
  export interface DeleteEnvironmentTemplateOutput {
    /**
     * The environment template detail data that's returned by Proton.
     */
    environmentTemplate?: EnvironmentTemplate;
  }
  export interface DeleteEnvironmentTemplateVersionInput {
    /**
     * The environment template major version to delete.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The environment template minor version to delete.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export interface DeleteEnvironmentTemplateVersionOutput {
    /**
     * The environment template version detail data that's returned by Proton.
     */
    environmentTemplateVersion?: EnvironmentTemplateVersion;
  }
  export interface DeleteRepositoryInput {
    /**
     * The name of the repository.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export interface DeleteRepositoryOutput {
    /**
     * The repository detail data that's returned by Proton.
     */
    repository?: Repository;
  }
  export interface DeleteServiceInput {
    /**
     * The name of the service to delete.
     */
    name: ResourceName;
  }
  export interface DeleteServiceOutput {
    /**
     * The service detail data that's returned by Proton.
     */
    service?: Service;
  }
  export interface DeleteServiceTemplateInput {
    /**
     * The name of the service template to delete.
     */
    name: ResourceName;
  }
  export interface DeleteServiceTemplateOutput {
    /**
     * The service template detail data that's returned by Proton.
     */
    serviceTemplate?: ServiceTemplate;
  }
  export interface DeleteServiceTemplateVersionInput {
    /**
     * The service template major version to delete.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The service template minor version to delete.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export interface DeleteServiceTemplateVersionOutput {
    /**
     * The service template version detail data that's returned by Proton.
     */
    serviceTemplateVersion?: ServiceTemplateVersion;
  }
  export interface DeleteTemplateSyncConfigInput {
    /**
     * The template name.
     */
    templateName: ResourceName;
    /**
     * The template type.
     */
    templateType: TemplateType;
  }
  export interface DeleteTemplateSyncConfigOutput {
    /**
     * The template sync configuration detail data that's returned by Proton.
     */
    templateSyncConfig?: TemplateSyncConfig;
  }
  export type DeploymentId = string;
  export type DeploymentStatus = "IN_PROGRESS"|"FAILED"|"SUCCEEDED"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"DELETE_COMPLETE"|"CANCELLING"|"CANCELLED"|string;
  export type DeploymentUpdateType = "NONE"|"CURRENT_VERSION"|"MINOR_VERSION"|"MAJOR_VERSION"|string;
  export type Description = string;
  export type DisplayName = string;
  export type EmptyNextToken = string;
  export interface Environment {
    /**
     * The Amazon Resource Name (ARN) of the environment.
     */
    arn: EnvironmentArn;
    /**
     * The time when the environment was created.
     */
    createdAt: Timestamp;
    /**
     * The environment deployment status.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * An environment deployment status message.
     */
    deploymentStatusMessage?: StatusMessage;
    /**
     * The description of the environment.
     */
    description?: Description;
    /**
     * The ID of the environment account connection that's used to provision infrastructure resources in an environment account.
     */
    environmentAccountConnectionId?: EnvironmentAccountConnectionId;
    /**
     * The ID of the environment account that the environment infrastructure resources are provisioned in.
     */
    environmentAccountId?: AwsAccountId;
    /**
     * The time when a deployment of the environment was last attempted.
     */
    lastDeploymentAttemptedAt: Timestamp;
    /**
     * The time when the environment was last deployed successfully.
     */
    lastDeploymentSucceededAt: Timestamp;
    /**
     * The name of the environment.
     */
    name: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.
     */
    protonServiceRoleArn?: Arn;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: Provisioning;
    /**
     * The infrastructure repository that you use to host your rendered infrastructure templates for self-managed provisioning.
     */
    provisioningRepository?: RepositoryBranch;
    /**
     * The environment spec.
     */
    spec?: SpecContents;
    /**
     * The major version of the environment template.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the environment template.
     */
    templateMinorVersion: TemplateVersionPart;
    /**
     * The Amazon Resource Name (ARN) of the environment template.
     */
    templateName: ResourceName;
  }
  export interface EnvironmentAccountConnection {
    /**
     * The Amazon Resource Name (ARN) of the environment account connection.
     */
    arn: EnvironmentAccountConnectionArn;
    /**
     * The environment account that's connected to the environment account connection.
     */
    environmentAccountId: AwsAccountId;
    /**
     * The name of the environment that's associated with the environment account connection.
     */
    environmentName: ResourceName;
    /**
     * The ID of the environment account connection.
     */
    id: EnvironmentAccountConnectionId;
    /**
     * The time when the environment account connection was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The ID of the management account that's connected to the environment account connection.
     */
    managementAccountId: AwsAccountId;
    /**
     * The time when the environment account connection request was made.
     */
    requestedAt: Timestamp;
    /**
     * The IAM service role that's associated with the environment account connection.
     */
    roleArn: Arn;
    /**
     * The status of the environment account connection.
     */
    status: EnvironmentAccountConnectionStatus;
  }
  export type EnvironmentAccountConnectionArn = string;
  export type EnvironmentAccountConnectionId = string;
  export type EnvironmentAccountConnectionRequesterAccountType = "MANAGEMENT_ACCOUNT"|"ENVIRONMENT_ACCOUNT"|string;
  export type EnvironmentAccountConnectionStatus = "PENDING"|"CONNECTED"|"REJECTED"|string;
  export type EnvironmentAccountConnectionStatusList = EnvironmentAccountConnectionStatus[];
  export interface EnvironmentAccountConnectionSummary {
    /**
     * The Amazon Resource Name (ARN) of the environment account connection.
     */
    arn: EnvironmentAccountConnectionArn;
    /**
     * The ID of the environment account that's connected to the environment account connection.
     */
    environmentAccountId: AwsAccountId;
    /**
     * The name of the environment that's associated with the environment account connection.
     */
    environmentName: ResourceName;
    /**
     * The ID of the environment account connection.
     */
    id: EnvironmentAccountConnectionId;
    /**
     * The time when the environment account connection was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The ID of the management account that's connected to the environment account connection.
     */
    managementAccountId: AwsAccountId;
    /**
     * The time when the environment account connection request was made.
     */
    requestedAt: Timestamp;
    /**
     * The IAM service role that's associated with the environment account connection.
     */
    roleArn: Arn;
    /**
     * The status of the environment account connection.
     */
    status: EnvironmentAccountConnectionStatus;
  }
  export type EnvironmentAccountConnectionSummaryList = EnvironmentAccountConnectionSummary[];
  export type EnvironmentArn = string;
  export interface EnvironmentSummary {
    /**
     * The Amazon Resource Name (ARN) of the environment.
     */
    arn: EnvironmentArn;
    /**
     * The time when the environment was created.
     */
    createdAt: Timestamp;
    /**
     * The environment deployment status.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * An environment deployment status message.
     */
    deploymentStatusMessage?: StatusMessage;
    /**
     * The description of the environment.
     */
    description?: Description;
    /**
     * The ID of the environment account connection that the environment is associated with.
     */
    environmentAccountConnectionId?: EnvironmentAccountConnectionId;
    /**
     * The ID of the environment account that the environment infrastructure resources are provisioned in.
     */
    environmentAccountId?: AwsAccountId;
    /**
     * The time when a deployment of the environment was last attempted.
     */
    lastDeploymentAttemptedAt: Timestamp;
    /**
     * The time when the environment was last deployed successfully.
     */
    lastDeploymentSucceededAt: Timestamp;
    /**
     * The name of the environment.
     */
    name: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make calls to other services on your behalf.
     */
    protonServiceRoleArn?: Arn;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: Provisioning;
    /**
     * The major version of the environment template.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the environment template.
     */
    templateMinorVersion: TemplateVersionPart;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export type EnvironmentSummaryList = EnvironmentSummary[];
  export interface EnvironmentTemplate {
    /**
     * The Amazon Resource Name (ARN) of the environment template.
     */
    arn: EnvironmentTemplateArn;
    /**
     * The time when the environment template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the environment template.
     */
    description?: Description;
    /**
     * The name of the environment template as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The customer provided encryption key for the environment template.
     */
    encryptionKey?: Arn;
    /**
     * The time when the environment template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the environment template.
     */
    name: ResourceName;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: Provisioning;
    /**
     * The ID of the recommended version of the environment template.
     */
    recommendedVersion?: FullTemplateVersionNumber;
  }
  export type EnvironmentTemplateArn = string;
  export interface EnvironmentTemplateFilter {
    /**
     * Include majorVersion to filter search for a major version.
     */
    majorVersion: TemplateVersionPart;
    /**
     * Include templateName to filter search for a template name.
     */
    templateName: ResourceName;
  }
  export type EnvironmentTemplateFilterList = EnvironmentTemplateFilter[];
  export interface EnvironmentTemplateSummary {
    /**
     * The Amazon Resource Name (ARN) of the environment template.
     */
    arn: EnvironmentTemplateArn;
    /**
     * The time when the environment template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the environment template.
     */
    description?: Description;
    /**
     * The name of the environment template as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The time when the environment template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the environment template.
     */
    name: ResourceName;
    /**
     * When included, indicates that the environment template is for customer provisioned and managed infrastructure.
     */
    provisioning?: Provisioning;
    /**
     * The recommended version of the environment template.
     */
    recommendedVersion?: FullTemplateVersionNumber;
  }
  export type EnvironmentTemplateSummaryList = EnvironmentTemplateSummary[];
  export interface EnvironmentTemplateVersion {
    /**
     * The Amazon Resource Name (ARN) of the version of an environment template.
     */
    arn: EnvironmentTemplateVersionArn;
    /**
     * The time when the version of an environment template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the minor version of an environment template.
     */
    description?: Description;
    /**
     * The time when the version of an environment template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The latest major version that's associated with the version of an environment template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The minor version of an environment template.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The recommended minor version of the environment template.
     */
    recommendedMinorVersion?: TemplateVersionPart;
    /**
     * The schema of the version of an environment template.
     */
    schema?: TemplateSchema;
    /**
     * The status of the version of an environment template.
     */
    status: TemplateVersionStatus;
    /**
     * The status message of the version of an environment template.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the version of an environment template.
     */
    templateName: ResourceName;
  }
  export type EnvironmentTemplateVersionArn = string;
  export interface EnvironmentTemplateVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the version of an environment template.
     */
    arn: EnvironmentTemplateVersionArn;
    /**
     * The time when the version of an environment template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the version of an environment template.
     */
    description?: Description;
    /**
     * The time when the version of an environment template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The latest major version that's associated with the version of an environment template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The version of an environment template.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The recommended minor version of the environment template.
     */
    recommendedMinorVersion?: TemplateVersionPart;
    /**
     * The status of the version of an environment template.
     */
    status: TemplateVersionStatus;
    /**
     * The status message of the version of an environment template.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export type EnvironmentTemplateVersionSummaryList = EnvironmentTemplateVersionSummary[];
  export type FullTemplateVersionNumber = string;
  export interface GetAccountSettingsInput {
  }
  export interface GetAccountSettingsOutput {
    /**
     * The Proton pipeline service role detail data that's returned by Proton.
     */
    accountSettings?: AccountSettings;
  }
  export interface GetEnvironmentAccountConnectionInput {
    /**
     * The ID of the environment account connection.
     */
    id: EnvironmentAccountConnectionId;
  }
  export interface GetEnvironmentAccountConnectionOutput {
    /**
     * The environment account connection detail data that's returned by Proton.
     */
    environmentAccountConnection: EnvironmentAccountConnection;
  }
  export interface GetEnvironmentInput {
    /**
     * The name of the environment that you want to get the detail data for.
     */
    name: ResourceName;
  }
  export interface GetEnvironmentOutput {
    /**
     * The environment detail data that's returned by Proton.
     */
    environment: Environment;
  }
  export interface GetEnvironmentTemplateInput {
    /**
     * The name of the environment template that you want to get the detail data for.
     */
    name: ResourceName;
  }
  export interface GetEnvironmentTemplateOutput {
    /**
     * The environment template detail data that's returned by Proton.
     */
    environmentTemplate: EnvironmentTemplate;
  }
  export interface GetEnvironmentTemplateVersionInput {
    /**
     * To view environment template major version detail data, include major Version.
     */
    majorVersion: TemplateVersionPart;
    /**
     * To view environment template minor version detail data, include minorVersion.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export interface GetEnvironmentTemplateVersionOutput {
    /**
     * The environment template version detail data that's returned by Proton.
     */
    environmentTemplateVersion: EnvironmentTemplateVersion;
  }
  export interface GetRepositoryInput {
    /**
     * The repository name, for example myrepos/myrepo.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export interface GetRepositoryOutput {
    /**
     * The repository detail data that's returned by Proton.
     */
    repository: Repository;
  }
  export interface GetRepositorySyncStatusInput {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The repository name.
     */
    repositoryName: RepositoryName;
    /**
     * The repository provider.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * The repository sync type.
     */
    syncType: SyncType;
  }
  export interface GetRepositorySyncStatusOutput {
    /**
     * The repository sync status detail data that's returned by Proton.
     */
    latestSync?: RepositorySyncAttempt;
  }
  export interface GetServiceInput {
    /**
     * The name of the service that you want to get the detail data for.
     */
    name: ResourceName;
  }
  export interface GetServiceInstanceInput {
    /**
     * The name of a service instance that you want to get the detail data for.
     */
    name: ResourceName;
    /**
     * The name of the service that the service instance belongs to.
     */
    serviceName: ResourceName;
  }
  export interface GetServiceInstanceOutput {
    /**
     * The service instance detail data that's returned by Proton.
     */
    serviceInstance: ServiceInstance;
  }
  export interface GetServiceOutput {
    /**
     * The service detail data that's returned by Proton.
     */
    service?: Service;
  }
  export interface GetServiceTemplateInput {
    /**
     * The name of the service template that you want to get detail data for.
     */
    name: ResourceName;
  }
  export interface GetServiceTemplateOutput {
    /**
     * The service template detail data that's returned by Proton.
     */
    serviceTemplate: ServiceTemplate;
  }
  export interface GetServiceTemplateVersionInput {
    /**
     * To view service template major version detail data, include major Version.
     */
    majorVersion: TemplateVersionPart;
    /**
     * To view service template minor version detail data, include minorVersion.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export interface GetServiceTemplateVersionOutput {
    /**
     * The service template version detail data that's returned by Proton.
     */
    serviceTemplateVersion: ServiceTemplateVersion;
  }
  export interface GetTemplateSyncConfigInput {
    /**
     * The template name.
     */
    templateName: ResourceName;
    /**
     * The template type.
     */
    templateType: TemplateType;
  }
  export interface GetTemplateSyncConfigOutput {
    /**
     * The template sync configuration detail data that's returned by Proton.
     */
    templateSyncConfig?: TemplateSyncConfig;
  }
  export interface GetTemplateSyncStatusInput {
    /**
     * The template name.
     */
    templateName: ResourceName;
    /**
     * The template type.
     */
    templateType: TemplateType;
    /**
     * The template major version.
     */
    templateVersion: TemplateVersionPart;
  }
  export interface GetTemplateSyncStatusOutput {
    /**
     * The template sync desired state that's returned by Proton.
     */
    desiredState?: Revision;
    /**
     * The details of the last successful sync that's returned by Proton.
     */
    latestSuccessfulSync?: ResourceSyncAttempt;
    /**
     * The details of the last sync that's returned by Proton.
     */
    latestSync?: ResourceSyncAttempt;
  }
  export type GitBranchName = string;
  export interface ListEnvironmentAccountConnectionsInput {
    /**
     * The environment name that's associated with each listed environment account connection.
     */
    environmentName?: ResourceName;
    /**
     * The maximum number of environment account connections to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next environment account connection in the array of environment account connections, after the list of environment account connections that was previously requested.
     */
    nextToken?: NextToken;
    /**
     * The type of account making the ListEnvironmentAccountConnections request.
     */
    requestedBy: EnvironmentAccountConnectionRequesterAccountType;
    /**
     * The status details for each listed environment account connection.
     */
    statuses?: EnvironmentAccountConnectionStatusList;
  }
  export interface ListEnvironmentAccountConnectionsOutput {
    /**
     * An array of environment account connections with details that's returned by Proton. 
     */
    environmentAccountConnections: EnvironmentAccountConnectionSummaryList;
    /**
     * A token that indicates the location of the next environment account connection in the array of environment account connections, after the current requested list of environment account connections.
     */
    nextToken?: NextToken;
  }
  export interface ListEnvironmentOutputsInput {
    /**
     * The environment name.
     */
    environmentName: ResourceName;
    /**
     * A token that indicates the location of the next environment output in the array of environment outputs, after the list of environment outputs that was previously requested.
     */
    nextToken?: EmptyNextToken;
  }
  export interface ListEnvironmentOutputsOutput {
    /**
     * A token that indicates the location of the next environment output in the array of environment outputs, after the current requested list of environment outputs.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of environment outputs with detail data.
     */
    outputs: OutputsList;
  }
  export interface ListEnvironmentProvisionedResourcesInput {
    /**
     * The environment name.
     */
    environmentName: ResourceName;
    /**
     * A token that indicates the location of the next environment provisioned resource in the array of environment provisioned resources, after the list of environment provisioned resources that was previously requested.
     */
    nextToken?: EmptyNextToken;
  }
  export interface ListEnvironmentProvisionedResourcesOutput {
    /**
     * A token that indicates the location of the next environment provisioned resource in the array of provisioned resources, after the current requested list of environment provisioned resources.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of environment provisioned resources.
     */
    provisionedResources: ProvisionedResourceList;
  }
  export interface ListEnvironmentTemplateVersionsInput {
    /**
     * To view a list of minor of versions under a major version of an environment template, include major Version. To view a list of major versions of an environment template, exclude major Version.
     */
    majorVersion?: TemplateVersionPart;
    /**
     * The maximum number of major or minor versions of an environment template to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.
     */
    nextToken?: NextToken;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export interface ListEnvironmentTemplateVersionsOutput {
    /**
     * A token that indicates the location of the next major or minor version in the array of major or minor versions of an environment template, after the list of major or minor versions that was previously requested.
     */
    nextToken?: NextToken;
    /**
     * An array of major or minor versions of an environment template detail data.
     */
    templateVersions: EnvironmentTemplateVersionSummaryList;
  }
  export interface ListEnvironmentTemplatesInput {
    /**
     * The maximum number of environment templates to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next environment template in the array of environment templates, after the list of environment templates that was previously requested.
     */
    nextToken?: NextToken;
  }
  export interface ListEnvironmentTemplatesOutput {
    /**
     * A token that indicates the location of the next environment template in the array of environment templates, after the current requested list of environment templates.
     */
    nextToken?: NextToken;
    /**
     * An array of environment templates with detail data.
     */
    templates: EnvironmentTemplateSummaryList;
  }
  export interface ListEnvironmentsInput {
    /**
     * An array of the versions of the environment template.
     */
    environmentTemplates?: EnvironmentTemplateFilterList;
    /**
     * The maximum number of environments to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next environment in the array of environments, after the list of environments that was previously requested.
     */
    nextToken?: NextToken;
  }
  export interface ListEnvironmentsOutput {
    /**
     * An array of environment detail data summaries.
     */
    environments: EnvironmentSummaryList;
    /**
     * A token that indicates the location of the next environment in the array of environments, after the current requested list of environments.
     */
    nextToken?: NextToken;
  }
  export interface ListRepositoriesInput {
    /**
     * The maximum number of repositories to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next repository in the array of repositories, after the list of repositories previously requested.
     */
    nextToken?: NextToken;
  }
  export interface ListRepositoriesOutput {
    /**
     * A token that indicates the location of the next repository in the array of repositories, after the current requested list of repositories. 
     */
    nextToken?: NextToken;
    /**
     * An array of repositories.
     */
    repositories: RepositorySummaryList;
  }
  export interface ListRepositorySyncDefinitionsInput {
    /**
     * A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the list of repository sync definitions previously requested.
     */
    nextToken?: EmptyNextToken;
    /**
     * The repository name.
     */
    repositoryName: RepositoryName;
    /**
     * The repository provider.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * The sync type. The only supported value is TEMPLATE_SYNC.
     */
    syncType: SyncType;
  }
  export interface ListRepositorySyncDefinitionsOutput {
    /**
     * A token that indicates the location of the next repository sync definition in the array of repository sync definitions, after the current requested list of repository sync definitions.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of repository sync definitions.
     */
    syncDefinitions: RepositorySyncDefinitionList;
  }
  export interface ListServiceInstanceOutputsInput {
    /**
     * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
     */
    nextToken?: EmptyNextToken;
    /**
     * The service instance name.
     */
    serviceInstanceName: ResourceName;
    /**
     * The service name.
     */
    serviceName: ResourceName;
  }
  export interface ListServiceInstanceOutputsOutput {
    /**
     * A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of service instance infrastructure as code outputs.
     */
    outputs: OutputsList;
  }
  export interface ListServiceInstanceProvisionedResourcesInput {
    /**
     * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.
     */
    nextToken?: EmptyNextToken;
    /**
     * The service instance name.
     */
    serviceInstanceName: ResourceName;
    /**
     * The service name.
     */
    serviceName: ResourceName;
  }
  export interface ListServiceInstanceProvisionedResourcesOutput {
    /**
     * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of provisioned resources for a service instance.
     */
    provisionedResources: ProvisionedResourceList;
  }
  export interface ListServiceInstancesInput {
    /**
     * The maximum number of service instances to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next service in the array of service instances, after the list of service instances that was previously requested.
     */
    nextToken?: NextToken;
    /**
     * The name of the service that the service instance belongs to.
     */
    serviceName?: ResourceName;
  }
  export interface ListServiceInstancesOutput {
    /**
     * A token that indicates the location of the next service instance in the array of service instances, after the current requested list of service instances.
     */
    nextToken?: NextToken;
    /**
     * An array of service instances with summaries of detail data.
     */
    serviceInstances: ServiceInstanceSummaryList;
  }
  export interface ListServicePipelineOutputsInput {
    /**
     * A token that indicates the location of the next output in the array of outputs, after the list of outputs that was previously requested.
     */
    nextToken?: EmptyNextToken;
    /**
     * The service name.
     */
    serviceName: ResourceName;
  }
  export interface ListServicePipelineOutputsOutput {
    /**
     * A token that indicates the location of the next output in the array of outputs, after the current requested list of outputs.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of outputs.
     */
    outputs: OutputsList;
  }
  export interface ListServicePipelineProvisionedResourcesInput {
    /**
     * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the list of provisioned resources that was previously requested.
     */
    nextToken?: EmptyNextToken;
    /**
     * The service name.
     */
    serviceName: ResourceName;
  }
  export interface ListServicePipelineProvisionedResourcesOutput {
    /**
     * A token that indicates the location of the next provisioned resource in the array of provisioned resources, after the current requested list of provisioned resources.
     */
    nextToken?: EmptyNextToken;
    /**
     * An array of provisioned resources for a service and pipeline.
     */
    provisionedResources: ProvisionedResourceList;
  }
  export interface ListServiceTemplateVersionsInput {
    /**
     * To view a list of minor of versions under a major version of a service template, include major Version. To view a list of major versions of a service template, exclude major Version.
     */
    majorVersion?: TemplateVersionPart;
    /**
     * The maximum number of major or minor versions of a service template to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the list of major or minor versions that was previously requested.
     */
    nextToken?: NextToken;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export interface ListServiceTemplateVersionsOutput {
    /**
     * A token that indicates the location of the next major or minor version in the array of major or minor versions of a service template, after the current requested list of service major or minor versions.
     */
    nextToken?: NextToken;
    /**
     * An array of major or minor versions of a service template with detail data.
     */
    templateVersions: ServiceTemplateVersionSummaryList;
  }
  export interface ListServiceTemplatesInput {
    /**
     * The maximum number of service templates to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next service template in the array of service templates, after the list of service templates previously requested.
     */
    nextToken?: NextToken;
  }
  export interface ListServiceTemplatesOutput {
    /**
     * A token that indicates the location of the next service template in the array of service templates, after the current requested list of service templates.
     */
    nextToken?: NextToken;
    /**
     * An array of service templates with detail data.
     */
    templates: ServiceTemplateSummaryList;
  }
  export interface ListServicesInput {
    /**
     * The maximum number of services to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next service in the array of services, after the list of services that was previously requested.
     */
    nextToken?: NextToken;
  }
  export interface ListServicesOutput {
    /**
     * A token that indicates the location of the next service in the array of services, after the current requested list of services.
     */
    nextToken?: NextToken;
    /**
     * An array of services with summaries of detail data.
     */
    services: ServiceSummaryList;
  }
  export interface ListTagsForResourceInput {
    /**
     * The maximum number of tags to list.
     */
    maxResults?: MaxPageResults;
    /**
     * A token that indicates the location of the next resource tag in the array of resource tags, after the list of resource tags that was previously requested.
     */
    nextToken?: String;
    /**
     * The Amazon Resource Name (ARN) of the resource for the listed tags.
     */
    resourceArn: Arn;
  }
  export interface ListTagsForResourceOutput {
    /**
     * A token that indicates the location of the next resource tag in the array of resource tags, after the current requested list of resource tags.
     */
    nextToken?: String;
    /**
     * A list of resource tags with detail data.
     */
    tags: TagList;
  }
  export type MaxPageResults = number;
  export type NextToken = string;
  export interface NotifyResourceDeploymentStatusChangeInput {
    /**
     * The deployment ID for your provisioned resource.
     */
    deploymentId?: DeploymentId;
    /**
     * The provisioned resource state change detail data that's returned by Proton.
     */
    outputs?: NotifyResourceDeploymentStatusChangeInputOutputsList;
    /**
     * The provisioned resource Amazon Resource Name (ARN).
     */
    resourceArn: Arn;
    /**
     * The status of your provisioned resource.
     */
    status: ResourceDeploymentStatus;
    /**
     * The deployment status message for your provisioned resource.
     */
    statusMessage?: SyntheticNotifyResourceDeploymentStatusChangeInputString;
  }
  export type NotifyResourceDeploymentStatusChangeInputOutputsList = Output[];
  export interface NotifyResourceDeploymentStatusChangeOutput {
  }
  export interface Output {
    /**
     * The output key.
     */
    key?: OutputKey;
    /**
     * The output value.
     */
    valueString?: OutputValueString;
  }
  export type OutputKey = string;
  export type OutputValueString = string;
  export type OutputsList = Output[];
  export type PipelineRoleArn = string;
  export interface ProvisionedResource {
    /**
     * The provisioned resource identifier.
     */
    identifier?: ProvisionedResourceIdentifier;
    /**
     * The provisioned resource name.
     */
    name?: ProvisionedResourceName;
    /**
     * The resource provisioning engine. At this time, CLOUDFORMATION can be used for Amazon Web Services-managed provisioning, and TERRAFORM can be used for self-managed provisioning. For more information, see Self-managed provisioning in the Proton Administrator Guide.
     */
    provisioningEngine?: ProvisionedResourceEngine;
  }
  export type ProvisionedResourceEngine = "CLOUDFORMATION"|"TERRAFORM"|string;
  export type ProvisionedResourceIdentifier = string;
  export type ProvisionedResourceList = ProvisionedResource[];
  export type ProvisionedResourceName = string;
  export type Provisioning = "CUSTOMER_MANAGED"|string;
  export interface RejectEnvironmentAccountConnectionInput {
    /**
     * The ID of the environment account connection to reject.
     */
    id: EnvironmentAccountConnectionId;
  }
  export interface RejectEnvironmentAccountConnectionOutput {
    /**
     * The environment connection account detail data that's returned by Proton.
     */
    environmentAccountConnection: EnvironmentAccountConnection;
  }
  export interface Repository {
    /**
     * The repository Amazon Resource Name (ARN).
     */
    arn: RepositoryArn;
    /**
     * The repository Amazon Web Services CodeStar connection that connects Proton to your repository.
     */
    connectionArn: Arn;
    /**
     * Your customer Amazon Web Services KMS encryption key.
     */
    encryptionKey?: Arn;
    /**
     * The repository name.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export type RepositoryArn = string;
  export interface RepositoryBranch {
    /**
     * The Amazon Resource Name (ARN) of the repository branch.
     */
    arn: RepositoryArn;
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The repository name.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export interface RepositoryBranchInput {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The repository name.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export type RepositoryId = string;
  export type RepositoryName = string;
  export type RepositoryProvider = "GITHUB"|"GITHUB_ENTERPRISE"|"BITBUCKET"|string;
  export interface RepositorySummary {
    /**
     * The Amazon Resource Name (ARN) for a repository.
     */
    arn: RepositoryArn;
    /**
     * The repository name.
     */
    name: RepositoryName;
    /**
     * The repository provider.
     */
    provider: RepositoryProvider;
  }
  export type RepositorySummaryList = RepositorySummary[];
  export interface RepositorySyncAttempt {
    /**
     * Detail data for sync attempt events.
     */
    events: RepositorySyncEvents;
    /**
     * The time when the sync attempt started.
     */
    startedAt: Timestamp;
    /**
     * The sync attempt status.
     */
    status: RepositorySyncStatus;
  }
  export interface RepositorySyncDefinition {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The directory in the repository.
     */
    directory: String;
    /**
     * The resource that is synced from.
     */
    parent: String;
    /**
     * The resource that is synced to.
     */
    target: String;
  }
  export type RepositorySyncDefinitionList = RepositorySyncDefinition[];
  export interface RepositorySyncEvent {
    /**
     * Event detail for a repository sync attempt.
     */
    event: String;
    /**
     * The external ID of the sync event.
     */
    externalId?: String;
    /**
     * The time that the sync event occurred.
     */
    time: Timestamp;
    /**
     * The type of event.
     */
    type: String;
  }
  export type RepositorySyncEvents = RepositorySyncEvent[];
  export type RepositorySyncStatus = "INITIATED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"QUEUED"|string;
  export type ResourceDeploymentStatus = "IN_PROGRESS"|"FAILED"|"SUCCEEDED"|string;
  export type ResourceName = string;
  export interface ResourceSyncAttempt {
    /**
     * An array of events with detail data.
     */
    events: ResourceSyncEvents;
    /**
     * Detail data for the initial repository commit, path and push.
     */
    initialRevision: Revision;
    /**
     * The time when the sync attempt started.
     */
    startedAt: Timestamp;
    /**
     * The status of the sync attempt.
     */
    status: ResourceSyncStatus;
    /**
     * The resource that is synced to.
     */
    target: String;
    /**
     * Detail data for the target revision.
     */
    targetRevision: Revision;
  }
  export interface ResourceSyncEvent {
    /**
     * A resource sync event.
     */
    event: String;
    /**
     * The external ID for the event.
     */
    externalId?: String;
    /**
     * The time when the event occurred.
     */
    time: Timestamp;
    /**
     * The type of event.
     */
    type: String;
  }
  export type ResourceSyncEvents = ResourceSyncEvent[];
  export type ResourceSyncStatus = "INITIATED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|string;
  export interface Revision {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The repository directory changed by a commit and push that activated the sync attempt.
     */
    directory: String;
    /**
     * The repository name.
     */
    repositoryName: RepositoryName;
    /**
     * The repository provider.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * The secure hash algorithm (SHA) hash for the revision.
     */
    sha: SHA;
  }
  export type S3Bucket = string;
  export type S3Key = string;
  export interface S3ObjectSource {
    /**
     * The name of the S3 bucket that contains a template bundle.
     */
    bucket: S3Bucket;
    /**
     * The path to the S3 bucket that contains a template bundle.
     */
    key: S3Key;
  }
  export type SHA = string;
  export interface Service {
    /**
     * The Amazon Resource Name (ARN) of the service.
     */
    arn: ServiceArn;
    /**
     * The name of the code repository branch that holds the code that's deployed in Proton.
     */
    branchName?: GitBranchName;
    /**
     * The time when the service was created.
     */
    createdAt: Timestamp;
    /**
     * A description of a service.
     */
    description?: Description;
    /**
     * The time when the service was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the service.
     */
    name: ResourceName;
    /**
     * The service pipeline detail data.
     */
    pipeline?: ServicePipeline;
    /**
     * The Amazon Resource Name (ARN) of the repository connection. For more information, see Set up a repository connection in the Proton Administrator Guide and Setting up with Proton in the Proton User Guide.
     */
    repositoryConnectionArn?: Arn;
    /**
     * The ID of the source code repository.
     */
    repositoryId?: RepositoryId;
    /**
     * The formatted specification that defines the service.
     */
    spec: SpecContents;
    /**
     * The status of the service.
     */
    status: ServiceStatus;
    /**
     * A service status message.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export type ServiceArn = string;
  export interface ServiceInstance {
    /**
     * The Amazon Resource Name (ARN) of the service instance.
     */
    arn: ServiceInstanceArn;
    /**
     * The time when the service instance was created.
     */
    createdAt: Timestamp;
    /**
     * The service instance deployment status.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * A service instance deployment status message.
     */
    deploymentStatusMessage?: StatusMessage;
    /**
     * The name of the environment that the service instance was deployed into.
     */
    environmentName: ResourceName;
    /**
     * The time when a deployment of the service instance was last attempted.
     */
    lastDeploymentAttemptedAt: Timestamp;
    /**
     * The time when the service instance was last deployed successfully.
     */
    lastDeploymentSucceededAt: Timestamp;
    /**
     * The name of the service instance.
     */
    name: ResourceName;
    /**
     * The name of the service that the service instance belongs to.
     */
    serviceName: ResourceName;
    /**
     * The service spec that was used to create the service instance.
     */
    spec?: SpecContents;
    /**
     * The major version of the service template that was used to create the service instance.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the service template that was used to create the service instance.
     */
    templateMinorVersion: TemplateVersionPart;
    /**
     * The name of the service template that was used to create the service instance.
     */
    templateName: ResourceName;
  }
  export type ServiceInstanceArn = string;
  export interface ServiceInstanceSummary {
    /**
     * The Amazon Resource Name (ARN) of the service instance.
     */
    arn: ServiceInstanceArn;
    /**
     * The time when the service instance was created.
     */
    createdAt: Timestamp;
    /**
     * The service instance deployment status.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * A service instance deployment status message.
     */
    deploymentStatusMessage?: StatusMessage;
    /**
     * The name of the environment that the service instance was deployed into.
     */
    environmentName: ResourceName;
    /**
     * The time when a deployment of the service was last attempted.
     */
    lastDeploymentAttemptedAt: Timestamp;
    /**
     * The time when the service was last deployed successfully.
     */
    lastDeploymentSucceededAt: Timestamp;
    /**
     * The name of the service instance.
     */
    name: ResourceName;
    /**
     * The name of the service that the service instance belongs to.
     */
    serviceName: ResourceName;
    /**
     * The service instance template major version.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The service instance template minor version.
     */
    templateMinorVersion: TemplateVersionPart;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export type ServiceInstanceSummaryList = ServiceInstanceSummary[];
  export interface ServicePipeline {
    /**
     * The Amazon Resource Name (ARN) of the service pipeline.
     */
    arn: Arn;
    /**
     * The time when the service pipeline was created.
     */
    createdAt: Timestamp;
    /**
     * The deployment status of the service pipeline.
     */
    deploymentStatus: DeploymentStatus;
    /**
     * A service pipeline deployment status message.
     */
    deploymentStatusMessage?: StatusMessage;
    /**
     * The time when a deployment of the service pipeline was last attempted.
     */
    lastDeploymentAttemptedAt: Timestamp;
    /**
     * The time when the service pipeline was last deployed successfully.
     */
    lastDeploymentSucceededAt: Timestamp;
    /**
     * The service spec that was used to create the service pipeline.
     */
    spec?: SpecContents;
    /**
     * The major version of the service template that was used to create the service pipeline.
     */
    templateMajorVersion: TemplateVersionPart;
    /**
     * The minor version of the service template that was used to create the service pipeline.
     */
    templateMinorVersion: TemplateVersionPart;
    /**
     * The name of the service template that was used to create the service pipeline.
     */
    templateName: ResourceName;
  }
  export type ServiceStatus = "CREATE_IN_PROGRESS"|"CREATE_FAILED_CLEANUP_IN_PROGRESS"|"CREATE_FAILED_CLEANUP_COMPLETE"|"CREATE_FAILED_CLEANUP_FAILED"|"CREATE_FAILED"|"ACTIVE"|"DELETE_IN_PROGRESS"|"DELETE_FAILED"|"UPDATE_IN_PROGRESS"|"UPDATE_FAILED_CLEANUP_IN_PROGRESS"|"UPDATE_FAILED_CLEANUP_COMPLETE"|"UPDATE_FAILED_CLEANUP_FAILED"|"UPDATE_FAILED"|"UPDATE_COMPLETE_CLEANUP_FAILED"|string;
  export interface ServiceSummary {
    /**
     * The Amazon Resource Name (ARN) of the service.
     */
    arn: ServiceArn;
    /**
     * The time when the service was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the service.
     */
    description?: Description;
    /**
     * The time when the service was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the service.
     */
    name: ResourceName;
    /**
     * The status of the service.
     */
    status: ServiceStatus;
    /**
     * A service status message.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export type ServiceSummaryList = ServiceSummary[];
  export interface ServiceTemplate {
    /**
     * The Amazon Resource Name (ARN) of the service template.
     */
    arn: ServiceTemplateArn;
    /**
     * The time when the service template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the service template.
     */
    description?: Description;
    /**
     * The service template name as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The customer provided service template encryption key that's used to encrypt data.
     */
    encryptionKey?: Arn;
    /**
     * The time when the service template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the service template.
     */
    name: ResourceName;
    /**
     * If pipelineProvisioning is true, a service pipeline is included in the service template. Otherwise, a service pipeline isn't included in the service template.
     */
    pipelineProvisioning?: Provisioning;
    /**
     * The recommended version of the service template.
     */
    recommendedVersion?: FullTemplateVersionNumber;
  }
  export type ServiceTemplateArn = string;
  export interface ServiceTemplateSummary {
    /**
     * The Amazon Resource Name (ARN) of the service template.
     */
    arn: ServiceTemplateArn;
    /**
     * The time when the service template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the service template.
     */
    description?: Description;
    /**
     * The service template name as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The time when the service template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The name of the service template.
     */
    name: ResourceName;
    /**
     * If pipelineProvisioning is true, a service pipeline is included in the service template, otherwise a service pipeline isn't included in the service template.
     */
    pipelineProvisioning?: Provisioning;
    /**
     * The recommended version of the service template.
     */
    recommendedVersion?: FullTemplateVersionNumber;
  }
  export type ServiceTemplateSummaryList = ServiceTemplateSummary[];
  export interface ServiceTemplateVersion {
    /**
     * The Amazon Resource Name (ARN) of the version of a service template.
     */
    arn: ServiceTemplateVersionArn;
    /**
     * An array of compatible environment template names for the major version of a service template.
     */
    compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateList;
    /**
     * The time when the version of a service template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the version of a service template.
     */
    description?: Description;
    /**
     * The time when the version of a service template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The latest major version that's associated with the version of a service template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The minor version of a service template.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The recommended minor version of the service template.
     */
    recommendedMinorVersion?: TemplateVersionPart;
    /**
     * The schema of the version of a service template.
     */
    schema?: TemplateSchema;
    /**
     * The service template version status.
     */
    status: TemplateVersionStatus;
    /**
     * A service template version status message.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the version of a service template.
     */
    templateName: ResourceName;
  }
  export type ServiceTemplateVersionArn = string;
  export interface ServiceTemplateVersionSummary {
    /**
     * The Amazon Resource Name (ARN) of the version of a service template.
     */
    arn: ServiceTemplateVersionArn;
    /**
     * The time when the version of a service template was created.
     */
    createdAt: Timestamp;
    /**
     * A description of the version of a service template.
     */
    description?: Description;
    /**
     * The time when the version of a service template was last modified.
     */
    lastModifiedAt: Timestamp;
    /**
     * The latest major version that's associated with the version of a service template.
     */
    majorVersion: TemplateVersionPart;
    /**
     * The minor version of a service template.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The recommended minor version of the service template.
     */
    recommendedMinorVersion?: TemplateVersionPart;
    /**
     * The service template minor version status.
     */
    status: TemplateVersionStatus;
    /**
     * A service template minor version status message.
     */
    statusMessage?: StatusMessage;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export type ServiceTemplateVersionSummaryList = ServiceTemplateVersionSummary[];
  export type SpecContents = string;
  export type StatusMessage = string;
  export type String = string;
  export type Subdirectory = string;
  export type SyncType = "TEMPLATE_SYNC"|string;
  export type SyntheticNotifyResourceDeploymentStatusChangeInputString = string;
  export interface Tag {
    /**
     * The key of the resource tag.
     */
    key: TagKey;
    /**
     * The value of the resource tag.
     */
    value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the Proton resource to apply customer tags to.
     */
    resourceArn: Arn;
    /**
     * A list of customer tags to apply to the Proton resource.
     */
    tags: TagList;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type TemplateSchema = string;
  export interface TemplateSyncConfig {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The name of the repository, for example myrepos/myrepo.
     */
    repositoryName: RepositoryName;
    /**
     * The repository provider.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * A subdirectory path to your template bundle version.
     */
    subdirectory?: Subdirectory;
    /**
     * The template name.
     */
    templateName: ResourceName;
    /**
     * The template type.
     */
    templateType: TemplateType;
  }
  export type TemplateType = "ENVIRONMENT"|"SERVICE"|string;
  export type TemplateVersionPart = string;
  export interface TemplateVersionSourceInput {
    /**
     * An S3 source object that includes the template bundle S3 path and name for a template minor version.
     */
    s3?: S3ObjectSource;
  }
  export type TemplateVersionStatus = "REGISTRATION_IN_PROGRESS"|"REGISTRATION_FAILED"|"DRAFT"|"PUBLISHED"|string;
  export type Timestamp = Date;
  export interface UntagResourceInput {
    /**
     * The Amazon Resource Name (ARN) of the resource to remove customer tags from.
     */
    resourceArn: Arn;
    /**
     * A list of customer tag keys that indicate the customer tags to be removed from the resource.
     */
    tagKeys: TagKeyList;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateAccountSettingsInput {
    /**
     * A repository for pipeline provisioning. Specify it if you have environments configured for self-managed provisioning with services that include pipelines.
     */
    pipelineProvisioningRepository?: RepositoryBranchInput;
    /**
     * The Amazon Resource Name (ARN) of the service role you want to use for provisioning pipelines. Assumed by Proton for Amazon Web Services-managed provisioning, and by customer-owned automation for self-managed provisioning.
     */
    pipelineServiceRoleArn?: PipelineRoleArn;
  }
  export interface UpdateAccountSettingsOutput {
    /**
     * The Proton pipeline service role and repository data shared across the Amazon Web Services account.
     */
    accountSettings: AccountSettings;
  }
  export interface UpdateEnvironmentAccountConnectionInput {
    /**
     * The ID of the environment account connection to update.
     */
    id: EnvironmentAccountConnectionId;
    /**
     * The Amazon Resource Name (ARN) of the IAM service role that's associated with the environment account connection to update.
     */
    roleArn: Arn;
  }
  export interface UpdateEnvironmentAccountConnectionOutput {
    /**
     * The environment account connection detail data that's returned by Proton.
     */
    environmentAccountConnection: EnvironmentAccountConnection;
  }
  export interface UpdateEnvironmentInput {
    /**
     * There are four modes for updating an environment. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that is higher than the major version in use and a minor version (optional).  
     */
    deploymentType: DeploymentUpdateType;
    /**
     * A description of the environment update.
     */
    description?: Description;
    /**
     * The ID of the environment account connection. You can only update to a new environment account connection if it was created in the same environment account that the current environment account connection was created in and is associated with the current environment.
     */
    environmentAccountConnectionId?: EnvironmentAccountConnectionId;
    /**
     * The name of the environment to update.
     */
    name: ResourceName;
    /**
     * The Amazon Resource Name (ARN) of the Proton service role that allows Proton to make API calls to other services your behalf.
     */
    protonServiceRoleArn?: Arn;
    /**
     * The infrastructure repository that you use to host your rendered infrastructure templates for self-managed provisioning.
     */
    provisioningRepository?: RepositoryBranchInput;
    /**
     * The formatted specification that defines the update.
     */
    spec?: SpecContents;
    /**
     * The major version of the environment to update.
     */
    templateMajorVersion?: TemplateVersionPart;
    /**
     * The minor version of the environment to update.
     */
    templateMinorVersion?: TemplateVersionPart;
  }
  export interface UpdateEnvironmentOutput {
    /**
     * The environment detail data that's returned by Proton.
     */
    environment: Environment;
  }
  export interface UpdateEnvironmentTemplateInput {
    /**
     * A description of the environment template update.
     */
    description?: Description;
    /**
     * The name of the environment template to update as displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The name of the environment template to update.
     */
    name: ResourceName;
  }
  export interface UpdateEnvironmentTemplateOutput {
    /**
     * The environment template detail data that's returned by Proton.
     */
    environmentTemplate: EnvironmentTemplate;
  }
  export interface UpdateEnvironmentTemplateVersionInput {
    /**
     * A description of environment template version to update.
     */
    description?: Description;
    /**
     * To update a major version of an environment template, include major Version.
     */
    majorVersion: TemplateVersionPart;
    /**
     * To update a minor version of an environment template, include minorVersion.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The status of the environment template minor version to update.
     */
    status?: TemplateVersionStatus;
    /**
     * The name of the environment template.
     */
    templateName: ResourceName;
  }
  export interface UpdateEnvironmentTemplateVersionOutput {
    /**
     * The environment template version detail data that's returned by Proton.
     */
    environmentTemplateVersion: EnvironmentTemplateVersion;
  }
  export interface UpdateServiceInput {
    /**
     * The edited service description.
     */
    description?: Description;
    /**
     * The name of the service to edit.
     */
    name: ResourceName;
    /**
     * Lists the service instances to add and the existing service instances to remain. Omit the existing service instances to delete from the list. Don't include edits to the existing service instances or pipeline. For more information, see Edit a service in the Proton Administrator Guide or the Proton User Guide.
     */
    spec?: SpecContents;
  }
  export interface UpdateServiceInstanceInput {
    /**
     * The deployment type. There are four modes for updating a service instance. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service instance is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service instance is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.  
     */
    deploymentType: DeploymentUpdateType;
    /**
     * The name of the service instance to update.
     */
    name: ResourceName;
    /**
     * The name of the service that the service instance belongs to.
     */
    serviceName: ResourceName;
    /**
     * The formatted specification that defines the service instance update.
     */
    spec?: SpecContents;
    /**
     * The major version of the service template to update.
     */
    templateMajorVersion?: TemplateVersionPart;
    /**
     * The minor version of the service template to update.
     */
    templateMinorVersion?: TemplateVersionPart;
  }
  export interface UpdateServiceInstanceOutput {
    /**
     * The service instance summary data that's returned by Proton.
     */
    serviceInstance: ServiceInstance;
  }
  export interface UpdateServiceOutput {
    /**
     * The service detail data that's returned by Proton.
     */
    service: Service;
  }
  export interface UpdateServicePipelineInput {
    /**
     * The deployment type. There are four modes for updating a service pipeline. The deploymentType field defines the mode.     NONE  In this mode, a deployment doesn't occur. Only the requested metadata parameters are updated.     CURRENT_VERSION  In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. Don’t include major or minor version parameters when you use this deployment-type.     MINOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.     MAJOR_VERSION  In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can specify a different major version that's higher than the major version in use and a minor version.  
     */
    deploymentType: DeploymentUpdateType;
    /**
     * The name of the service to that the pipeline is associated with.
     */
    serviceName: ResourceName;
    /**
     * The spec for the service pipeline to update.
     */
    spec: SpecContents;
    /**
     * The major version of the service template that was used to create the service that the pipeline is associated with.
     */
    templateMajorVersion?: TemplateVersionPart;
    /**
     * The minor version of the service template that was used to create the service that the pipeline is associated with.
     */
    templateMinorVersion?: TemplateVersionPart;
  }
  export interface UpdateServicePipelineOutput {
    /**
     * The pipeline details that are returned by Proton.
     */
    pipeline: ServicePipeline;
  }
  export interface UpdateServiceTemplateInput {
    /**
     * A description of the service template update.
     */
    description?: Description;
    /**
     * The name of the service template to update that's displayed in the developer interface.
     */
    displayName?: DisplayName;
    /**
     * The name of the service template to update.
     */
    name: ResourceName;
  }
  export interface UpdateServiceTemplateOutput {
    /**
     * The service template detail data that's returned by Proton.
     */
    serviceTemplate: ServiceTemplate;
  }
  export interface UpdateServiceTemplateVersionInput {
    /**
     * An array of compatible environment names for a service template major or minor version to update.
     */
    compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInputList;
    /**
     * A description of a service template version to update.
     */
    description?: Description;
    /**
     * To update a major version of a service template, include major Version.
     */
    majorVersion: TemplateVersionPart;
    /**
     * To update a minor version of a service template, include minorVersion.
     */
    minorVersion: TemplateVersionPart;
    /**
     * The status of the service template minor version to update.
     */
    status?: TemplateVersionStatus;
    /**
     * The name of the service template.
     */
    templateName: ResourceName;
  }
  export interface UpdateServiceTemplateVersionOutput {
    /**
     * The service template version detail data that's returned by Proton.
     */
    serviceTemplateVersion: ServiceTemplateVersion;
  }
  export interface UpdateTemplateSyncConfigInput {
    /**
     * The repository branch.
     */
    branch: GitBranchName;
    /**
     * The name of the repository (for example, myrepos/myrepo).
     */
    repositoryName: RepositoryName;
    /**
     * The repository provider.
     */
    repositoryProvider: RepositoryProvider;
    /**
     * A subdirectory path to your template bundle version. When included, limits the template bundle search to this repository directory.
     */
    subdirectory?: Subdirectory;
    /**
     * The synced template name.
     */
    templateName: ResourceName;
    /**
     * The synced template type.
     */
    templateType: TemplateType;
  }
  export interface UpdateTemplateSyncConfigOutput {
    /**
     * The template sync configuration detail data that's returned by Proton.
     */
    templateSyncConfig?: TemplateSyncConfig;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Proton client.
   */
  export import Types = Proton;
}
export = Proton;
